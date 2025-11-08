import { ApiProperty,OmitType } from "@nestjs/swagger";
import { PaginationResponse } from "../../../../utils";
import { GetMusicByIdResponse } from "../get-music-by-id";

export class GetMusics extends OmitType(GetMusicByIdResponse,['track']) {

}

export class GetMusicsResponse extends PaginationResponse<GetMusics> {
    @ApiProperty({
        type: GetMusics,
        description: 'Список музыки',
        isArray: true
    })
    data: GetMusics[];
}