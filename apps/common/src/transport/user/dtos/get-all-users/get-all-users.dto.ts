import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional,IsString,IsUUID } from "class-validator";
import { PaginationDto } from "../../../../utils";

export class GetAllUsersDto extends PaginationDto {
    @ApiProperty({
        type: String,
        description: 'Поисковый запрос',
        required: false
    })
    @IsString()
    @IsOptional()
    search?: string;

    @ApiProperty({
        type: String,
        description: 'Идентификаторы пользователей',
        required: false,
        isArray: true
    })
    @IsOptional()
    @IsUUID(undefined,{ each: true })
    @Transform(({ value }) => Array.isArray(value)? value:value&&[value])
    ids?: string[]=[];
}