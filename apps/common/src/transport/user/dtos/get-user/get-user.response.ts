import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { ShortRole } from "../get-roles";

export class GetUserResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Имя пользователя',
        example: 'Яся'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Логин пользователя',
        example: 'yara'
    })
    login: string;

    @ApiProperty({
        type: String,
        description: 'Телефон пользователя',
        example: '+790000000000'
    })
    phone: string;

    @ApiProperty({
        type: String,
        description: 'Почта пользователя',
        example: 'user@mail.ru'
    })
    email: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор для стора с фото',
        example: randomUUID()
    })
    avatarId: string | null;

    @ApiProperty({
        type: ShortRole,
        description: 'Роль пользователя'
    })
    role: ShortRole
}