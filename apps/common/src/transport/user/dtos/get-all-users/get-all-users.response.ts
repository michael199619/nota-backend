import { ApiProperty, PickType } from "@nestjs/swagger";
import { PaginationResponse } from "../../../../utils";
import { GetUserResponse } from "../get-user";

export class GetAllUsers extends PickType(GetUserResponse, ['id', 'name', 'role']) {
    //erd
}

export class GetAllUsersResponse extends PaginationResponse<GetAllUsers> {
    @ApiProperty({
        type: GetAllUsers,
        description: 'Массив пользователей',
        isArray: true
    })
    data: GetAllUsers[]
}