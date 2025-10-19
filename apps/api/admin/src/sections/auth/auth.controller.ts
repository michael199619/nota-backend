import { Body,Controller,Post,Put } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { ChangePasswordUserDto,ChangePasswordUserResponse,LoginUserDto,LoginUserResponse,LogoutUserDto,LogoutUserResponse,RefreshTokenUserDto,RefreshTokenUserResponse,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly userPublisher: UserPublisher
    ) { }

    @Post()
    @ApiOperation({
        description: 'Вход',
    })
    @ApiResponse({
        type: LoginUserResponse
    })
    getRoles(
        @Body() dto: LoginUserDto
    ) {
        return firstValueFrom(this.userPublisher.loginUser(dto))
    }

    @Post('logout')
    @ApiOperation({
      description: '',
    })
    @ApiResponse({
      type: LogoutUserResponse
    })
    logoutUser(
      @Body() dto: LogoutUserDto
    ) {
      return firstValueFrom(this.userPublisher.logoutUser(dto))
    }

    @Put('change-password')
    @ApiOperation({
      description: 'Изменить пароль',
    })
    @ApiResponse({
      type: ChangePasswordUserResponse
    })
    changePasswordUser(
      @Body() dto: ChangePasswordUserDto
    ) {
      return firstValueFrom(this.userPublisher.changePasswordUser(dto))
    }

    @Post('refresh-token')
    @ApiOperation({
        description: 'Обновить токен',
    })
    @ApiResponse({
        type: RefreshTokenUserResponse
    })
    refreshTokenUser(
      @Body() dto: RefreshTokenUserDto
    ) {
        return firstValueFrom(this.userPublisher.refreshTokenUser(dto))
    }
}