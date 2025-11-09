import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateTrackResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор трека',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Короткий трек ID',
        example: randomUUID()
    })
    shortTrackId: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Полный трек ID',
        example: randomUUID()
    })
    fullTrackId: string|null;
}