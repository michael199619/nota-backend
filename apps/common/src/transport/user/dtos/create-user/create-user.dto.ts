import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID, Length } from "class-validator";
import { randomUUID } from "crypto";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'Имя пользователя',
        example: 'Катя'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2)
    name: string;

    @ApiProperty({
        type: String,
        description: 'Логин пользователя',
        example: 'katya'
    })
    @IsString()
    @IsNotEmpty()
    @Length(4)
    login: string;

    @ApiProperty({
        type: String,
        description: 'Телефон пользователя',
        example: '+79000000000'
    })
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({
        type: String,
        description: 'Почта пользователя',
        example: 'user@mail.ru'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Идентификатор фото из стора',
        example: randomUUID()
    })
    @IsUUID()
    @IsOptional()
    avatarId?: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор роли из стора',
        example: randomUUID()
    })
    @IsUUID()
    roleId: string;

    @ApiProperty({
        type: String,
        description: 'Пароль',
        example: 'password'
    })
    @IsString()
    @IsNotEmpty()
    @Length(5)
    password: string;
}