import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse } from "../../../../utils";
import { GetSalaryUserResponse } from "../get-salary-user/get-salary-user.response";


export class GetSalaryUsersResponse extends PaginationResponse<GetSalaryUserResponse> {
    @ApiProperty({
        type: GetSalaryUserResponse,
        description: 'Массив пользователей с зарплатой',
        isArray: true
    })
    data: GetSalaryUserResponse[]
}