import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional,IsString,Length } from "class-validator";

export class GetProvidersDto {
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

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Номер страницы',
        example: 1
    })
    @IsOptional()
    page?: number;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Количество элементов на странице',
        example: 10
    })
    @IsOptional()
    limit?: number;
}