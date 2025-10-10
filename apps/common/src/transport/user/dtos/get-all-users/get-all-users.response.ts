import { ApiProperty, PickType } from "@nestjs/swagger";
import { PaginationResponse } from "@perfume-platform/common/utils";
import { UserGetResponse } from "../get-user";

export class GetAllUsers extends PickType(UserGetResponse, ['id', 'name', 'roleName']) {
}

export class GetAllUsersResponse extends PaginationResponse<GetAllUsers> {
    @ApiProperty({
        type: GetAllUsers,
        description: 'Массив пользователей',
        isArray: true
    })
    data: GetAllUsers[]
}