import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveTrackDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор трека',
        example: randomUUID
    })
    @IsUUID()
    id: string;
}