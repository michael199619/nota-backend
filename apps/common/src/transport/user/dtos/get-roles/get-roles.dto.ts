import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "@perfume-platform/common/utils";
import { IsOptional, IsString } from "class-validator";

export class GetRolesDto extends PaginationDto {
    @ApiProperty({
        type: String,
        description: 'Поиск',
        example: 'coo'
    })
    @IsString()
    @IsOptional()
    seatch?: string;
}