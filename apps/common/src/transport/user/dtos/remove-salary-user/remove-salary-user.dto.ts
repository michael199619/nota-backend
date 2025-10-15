import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveSalaryUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    @IsUUID()
    @IsString()
    userId: string;

    @ApiProperty({
        type: String,
        isArray: true,
        description: 'Идентификаторы зарплат пользователя',
        example: [randomUUID()]
    })
    @IsUUID(undefined, { each: true })
    @IsString({ each: true })
    ids: string[];
}