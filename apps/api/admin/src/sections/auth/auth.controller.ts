import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto, LoginUserResponse, UsersPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly usersPublisher: UsersPublisher
    ) { }

    @Get()
    @ApiOperation({
        description: 'Вход',
    })
    @ApiResponse({
        type: LoginUserResponse
    })
    getRoles(
        @Query() dto: LoginUserDto
    ) {
        return firstValueFrom(this.usersPublisher.loginUser(dto))
    }
}