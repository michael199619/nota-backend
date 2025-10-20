import { Body,Controller,Post,Put,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { ChangePasswordUserResponse,ContextService,LoginUserDto,LoginUserResponse,LogoutUserResponse,RefreshTokenUserResponse,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';
import { AdminChangePasswordUserDto } from './auth.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly userPublisher: UserPublisher,
        private readonly ctx: ContextService
    ) {}

    @Post()
    @ApiOperation({
        description: 'Вход',
    })
    @ApiResponse({
        type: LoginUserResponse
    })
    async loginUser(
        @Body() dto: LoginUserDto
    ) {
        const login = await firstValueFrom(this.userPublisher.loginUser(dto));   console.log(login)
        this.ctx.setTokens(login)
        return login;
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    @ApiOperation({
      description: 'Выход',
    })
    @ApiResponse({type: LogoutUserResponse})
    async logoutUser() {
      const res = await firstValueFrom(this.userPublisher.logoutUser({
        id: this.ctx.user.id,
        refreshToken: this.ctx.refreshToken
      }));

      this.ctx.removeTokens();

      return res;
    }

    @Put('change-password')
    @ApiOperation({
      description: 'Изменить пароль',
    })
    @ApiResponse({
      type: ChangePasswordUserResponse
    })
    @UseGuards(AuthGuard)
    async changePasswordUser(
      @Body() dto: AdminChangePasswordUserDto
    ) {
      const login = await firstValueFrom(this.userPublisher.changePasswordUser({
        ...dto,
        id: this.ctx.userId
      }));

      this.ctx.setTokens(login);

      return login;
    }

    @Post('refresh-token')
    @UseGuards(AuthGuard)
    @ApiOperation({
        description: 'Обновить токен',
    })
    @ApiResponse({
        type: RefreshTokenUserResponse
    })
    async refreshTokenUser() {
        const login = await firstValueFrom(this.userPublisher.refreshTokenUser({
          id: this.ctx.userId,
          refreshToken: this.ctx.refreshToken
        }));

        this.ctx.setTokens(login);

        return login
    }
}