import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveSalaryUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор зарплаты пользователя',
        example: randomUUID()
    })
    @IsUUID()
    @IsString()
    id: string;
}