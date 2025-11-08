import { ApiProperty,OmitType } from "@nestjs/swagger";
import { GetPerfumeByIdResponse } from "../get-perfume-by-id";
import { PaginationResponse } from "./../../../../utils";

export class GetPerfume extends OmitType(GetPerfumeByIdResponse,[]) {

}

export class GetPerfumesResponse extends PaginationResponse<GetPerfume> {
    @ApiProperty({
        type: GetPerfume,
        description: 'Список парфюмов',
        isArray: true
    })
    data: GetPerfume[];
}