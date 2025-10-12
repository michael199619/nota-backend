import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { PaginationDto } from "../../../../utils";

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