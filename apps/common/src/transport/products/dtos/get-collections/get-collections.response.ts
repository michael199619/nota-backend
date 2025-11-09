import { ApiProperty,PickType } from "@nestjs/swagger";
import { PaginationResponse } from "../../../../utils";
import { GetCollectionByIdResponse } from "../get-collection-by-id";

export class GetCollections extends PickType(GetCollectionByIdResponse,["id",'name','description','status']) {

}

export class GetCollectionsResponse extends PaginationResponse<GetCollections> {
    @ApiProperty({
        type: GetCollections,
        isArray: true,
        description: 'Список коллекций',
    })
    data: GetCollections[]
}