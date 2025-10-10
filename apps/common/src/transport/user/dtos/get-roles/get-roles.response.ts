import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse, ShortResponse } from "@perfume-platform/common/utils";

class ShortRole extends ShortResponse<string> {

}

export class GetRolesResponse extends PaginationResponse<ShortRole> {
    @ApiProperty({
        type: ShortRole,
        description: 'Массив ролей',
        example: 'coo'
    })
    data: ShortRole[]
}