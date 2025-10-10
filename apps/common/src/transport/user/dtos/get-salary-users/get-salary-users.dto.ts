import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "@perfume-platform/common/utils";
import { IsString } from "class-validator";

export class GetSalaryUsersDto extends PaginationDto {
    @ApiProperty({
        type: String,
        description: 'Поиск',
        example: 'яся'
    })
    @IsString()
    search?: string;
}