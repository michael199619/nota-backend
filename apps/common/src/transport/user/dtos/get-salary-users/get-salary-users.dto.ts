import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { PaginationDto } from "../../../../utils";

export class GetSalaryUsersDto extends PaginationDto {
    @ApiProperty({
        type: String,
        description: 'Поиск',
        example: 'яся'
    })
    @IsString()
    search?: string;
}