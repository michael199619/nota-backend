import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional,IsString,Length } from "class-validator";
import { PaginationDto } from "../../../../utils";

export class GetProvidersDto extends PaginationDto {
    @ApiProperty({
        type: String,
        required: false,
        description: 'Поиск по названию',
        example: 'поставщиков'
    })
    @IsString()
    @IsOptional()
    @Length(0,255)
    @Transform(({ value }) => value?.trim())
    search?: string;
}