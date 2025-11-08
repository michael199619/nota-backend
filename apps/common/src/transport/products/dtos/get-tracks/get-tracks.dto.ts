import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional,IsString,Length } from "class-validator";
import { PaginationDto } from "./../../../../utils";

export class GetTracksDto extends PaginationDto {
    @ApiProperty({
        type: String,
        required: false,
        description: 'Поиск по названию',
        example: 'треков'
    })
    @IsString()
    @IsOptional()
    @Length(0,255)
    @Transform(({ value }) => value?.trim())
    search?: string;
}