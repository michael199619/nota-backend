import { ApiProperty,PickType } from "@nestjs/swagger";
import { GetProviderByIdResponse } from "../get-provider-by-id";
import { PaginationResponse } from "./../../../../utils";

export class GetProviders extends PickType(GetProviderByIdResponse,['name','id']) {

}

export class GetProvidersResponse extends PaginationResponse<GetProviders> {
    @ApiProperty({
        type: GetProviders,
        description: 'Список поставщиков',
        isArray: true
    })
    data: GetProviders[];
}