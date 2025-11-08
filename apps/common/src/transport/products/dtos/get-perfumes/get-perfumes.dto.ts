import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional,IsString,IsUUID,Length } from "class-validator";
import { randomUUID } from "crypto";
import { PaginationDto } from "./../../../../utils";

export class GetPerfumesDto extends PaginationDto {
    @ApiProperty({
        type: String,
        required: false,
        description: 'Поиск по названию парфюма или названию коллекции',
        example: 'парфюмов'
    })
    @IsString()
    @IsOptional()
    @Length(0,255)
    @Transform(({ value }) => value?.trim())
    search?: string;

    @ApiProperty({
        type: String,
        isArray: true,
        required: false,
        description: 'Поиск по авторам',
        example: [randomUUID()]
    })
    @IsOptional()
    @IsUUID(undefined,{ each: true })
    authorIds?: string[];
}