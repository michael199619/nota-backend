import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID, Min } from "class-validator";
import { randomUUID } from "crypto";

export class EditUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    @IsUUID()
    id: string;

    @ApiProperty({
        type: String,
        description: 'Имя пользователя',
        example: 'Катя'
    })
    @IsString()
    @IsNotEmpty()
    @Min(2)
    name: string;

    @ApiProperty({
        type: String,
        description: 'Логин пользователя',
        example: 'katya'
    })
    @IsString()
    @IsNotEmpty()
    @Min(4)
    login: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: 'Катя'
    })
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: 'Катя'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор фото из стора',
        example: randomUUID()
    })
    @IsUUID()
    avatarId: string;
}