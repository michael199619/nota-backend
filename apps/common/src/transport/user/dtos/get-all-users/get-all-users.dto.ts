import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "../../../../utils";

export class GetAllUsersDto extends PaginationDto {
    @ApiProperty({
        description: 'Поисковый запрос',
        required: false
    })
    search?: string;

    @ApiProperty({
        description: 'Идентификаторы пользователей',
        required: false
    })
    ids?: string[]=[];
}