import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class GetTrackResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор музыки',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор на стор к превью трека',
        example: randomUUID()
    })
    shortTrackId: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор на стор к полному треку',
        example: randomUUID()
    })
    fullTrackId: string|null
}

export class GetMusicByIdResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор музыки',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Название трека/альбома',
        example: 'ambient'
    })
    name: string;

    @ApiProperty({
        type: GetTrackResponse,
        description: 'Трек'
    })
    track: GetTrackResponse|null;
}