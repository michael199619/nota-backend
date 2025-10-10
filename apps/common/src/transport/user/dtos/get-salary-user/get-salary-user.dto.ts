import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class GetSalaryUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    @IsUUID()
    @IsString()
    id: string;
}