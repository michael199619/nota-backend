import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';
import { get } from 'env-var';

export const appConfig = registerAs('app', () => ({
    port: get('PORT').default('3000').asPortNumber(),
    nodeEnv: get('NODE_ENV').default('development').asString(),
}));

export const redisConfig = registerAs('redis', () => ({
    host: get('REDIS_HOST').default('localhost').asString(),
    port: get('REDIS_PORT').default('6379').asPortNumber(),
    password: get('REDIS_PASSWORD').asString(),
}));

export const kafkaConfig = registerAs('kafka', () => ({
    brokers: get('KAFKA_BROKERS').default('localhost:9092').asString().split(','),
    clientId: get('KAFKA_CLIENT_ID').default('perfume-platform').asString(),
    groupId: get('KAFKA_GROUP_ID').default('perfume-group').asString(),
}));

export const natsConfig = registerAs('nats', () => ({
    servers: get('NATS_SERVERS').default('nats://localhost:4222').asString().split(','),
}));

export const jwtConfig = registerAs('jwt', () => ({
    secret: get('JWT_SECRET').default('secret').asString(),
    tokenRefresh: get('JWT_REFRESH_SECRET').default('your-super-secret-jwt-key').asString(),
    tokenAccess: get('JWT_ACCESS_SECRET').default('your-super-secret-jwt-key').asString(),
    refreshExpiresIn: get('JWT_REFRESH_EXPIRES_IN').default('7d').asString() as JwtSignOptions['expiresIn'],
    accessExpiresIn: get('JWT_REFRESH_EXPIRES_IN').default('15m').asString() as JwtSignOptions['expiresIn'],
}));
