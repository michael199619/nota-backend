import { InjectRedis } from '@nestjs-modules/ioredis';
import { ForbiddenException,Inject,Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordHasher } from '@perfume-platform/common';
import { randomUUID } from 'crypto';
import Redis from 'ioredis';
import { UsersRepository } from '../../db/users/users.repository';
import { jwtConfig } from '../config/config';
import { RefreshPayload } from './auth.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwt: JwtService,
        @Inject(jwtConfig.KEY)
        private readonly config: ConfigType<typeof jwtConfig>,
        @InjectRedis() private readonly redis: Redis
    ) {
    }

    private refreshKey(userId: string, jti: string) {
        return `auth:user:refresh:${userId}:${jti}`;
    }

    async login(login: string, password: string) {
        const user = await this.usersRepository.getUserByLogin(login);

        if (!user) {
            throw new ForbiddenException();
        }

        if (!await PasswordHasher.verify(password, user.password)) {
            throw new ForbiddenException();
        }

        const { accessToken, refreshToken, payload } = await this.signTokens(user.id);
        await this.saveRefreshHash(user.id, payload.jti, refreshToken, payload.exp!);
        return { accessToken, refreshToken };
    }

    async refresh(userId: string, refreshToken: string) {
        let payload: RefreshPayload;

        try {
            payload = await this.jwt.verifyAsync<RefreshPayload>(refreshToken, {
                secret: this.config.tokenRefresh,
            });

            if (payload.sub !== userId) {
                throw new ForbiddenException();
            }
        } catch {
            throw new ForbiddenException();
        }

        const key = this.refreshKey(userId, payload.jti);
        const storedHash = await this.redis.get(key);

        if (!storedHash) {
            throw new ForbiddenException();
        }

        if (!await PasswordHasher.verify(refreshToken, storedHash)) {
            await this.redis.del(key);
            throw new ForbiddenException();
        }

        await this.redis.del(key);

        const {
            accessToken,
            refreshToken: newRefresh,
            payload: newPayload
        } = await this.signTokens(userId);
        await this.saveRefreshHash(userId, newPayload.jti, newRefresh, newPayload.exp!);

        return { accessToken, refreshToken: newRefresh };
    }

    async logout(userId: string, refreshToken: string) {
        try {
            const payload = await this.jwt.verifyAsync<RefreshPayload>(refreshToken, {
                secret: this.config.tokenRefresh,
            });

            if (payload.sub !== userId) {
                return;
            };

            await this.redis.del(this.refreshKey(userId, payload.jti));
        } catch {
            // токен мог быть уже невалиден — просто игнорируем
        }
    }

    // todo
    async logoutAll(userId: string) {

    }

    private async signTokens(userId: string) {
        const jti = randomUUID();
        const payload: RefreshPayload = { sub: userId, jti };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwt.signAsync({ sub: userId }, {
                secret: this.config.tokenAccess,
                expiresIn: this.config.accessExpiresIn,
            }),
            this.jwt.signAsync(payload, {
                secret: this.config.tokenRefresh,
                expiresIn: this.config.refreshExpiresIn,
            }),
        ]);

        const decoded = this.jwt.decode<RefreshPayload>(refreshToken);
        payload.exp = decoded?.exp;

        return { accessToken, refreshToken, payload };
    }

    private async saveRefreshHash(userId: string, jti: string, token: string, exp: number) {
        const hash = await PasswordHasher.getHashPassword(token);
        const ttlSec = Math.max(1, exp - Math.floor(Date.now() / 1000));
        const key = this.refreshKey(userId, jti);
        await this.redis.set(key, hash, 'EX', ttlSec);
    }
}