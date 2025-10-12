import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse, ShortResponse } from "../../../../utils";

export class ShortRole extends ShortResponse {

}

export class GetRolesResponse extends PaginationResponse<ShortRole> {
    @ApiProperty({
        type: ShortRole,
        description: 'Массив ролей',
        example: 'coo'
    })
    data: ShortRole[]
}