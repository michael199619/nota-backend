import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID, Length } from "class-validator";
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
        required: false,
        description: 'Имя пользователя',
        example: 'Катя'
    })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Length(2)
    name?: string;

    @ApiProperty({
        required: false,
        type: String,
        description: 'Логин пользователя',
        example: 'katya'
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @Length(4)
    login?: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Телефон пользователя',
        example: 'Катя'
    })
    @IsOptional()
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Почта пользователя',
        example: 'Катя'
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Идентификатор фото из стора',
        example: randomUUID()
    })
    @IsUUID()
    @IsOptional()
    avatarId?: string;
}