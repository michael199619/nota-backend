import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveMusicDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор музыки',
        example: randomUUID()
    })
    @IsUUID()
    id: string;
}