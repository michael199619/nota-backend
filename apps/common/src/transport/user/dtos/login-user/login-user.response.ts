import { ApiProperty } from "@nestjs/swagger";
export class LoginUserResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя'
    })
    userId: string;

    @ApiProperty({
        type: String,
        description: 'Токен пользователя'
    })
    accessToken: string;

    @ApiProperty({
        type: String,
        description: 'Рефреш токен пользователя'
    })
    refreshToken: string;
}