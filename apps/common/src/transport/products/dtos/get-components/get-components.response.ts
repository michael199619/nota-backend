import { ApiProperty,PickType } from "@nestjs/swagger";
import { PaginationResponse } from "../../../../utils";
import { GetComponent } from "../get-perfume-by-id";

export class GetComponents extends PickType(GetComponent,['id','name','type']) {
}

export class GetComponentsResponse extends PaginationResponse<GetComponents> {
    @ApiProperty({
        type: GetComponents,
        description: 'Список компонентов',
        isArray: true
    })
    data: GetComponents[];
}