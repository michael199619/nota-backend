import { ApiProperty } from "@nestjs/swagger";
import { GetTrackResponse } from "../get-music-by-id";
import { PaginationResponse } from "./../../../../utils";

export class GetTracksResponse extends PaginationResponse<GetTrackResponse> {
    @ApiProperty({
        type: GetTrackResponse,
        description: 'Список треков',
        isArray: true
    })
    data: GetTrackResponse[];
}