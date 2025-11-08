import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean,IsNotEmpty,IsNumber,IsOptional,IsString,IsUUID,Length,Min } from "class-validator";
import { randomUUID } from "crypto";

export class CreateProductDto {
    @ApiProperty({
        type: Boolean,
        required: false,
        description: 'Является ли продукт коллекцией',
        example: true
    })
    @IsBoolean()
    @IsOptional()
    isCollection?: boolean;

    @ApiProperty({
        type: String,
        description: 'Идентификатор музыки',
        example: randomUUID()
    })
    @IsUUID()
    musicId: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор парфюма',
        example: randomUUID()
    })
    @IsUUID()
    perfumeId: string;

    @ApiProperty({
        type: Number,
        description: 'Текущая цена',
        example: 99.99
    })
    @IsNumber()
    @Min(0)
    currentPrice: number;

    @ApiProperty({
        type: String,
        description: 'Название продукта',
        example: 'Весенний аромат'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    @Transform(({ value }) => value?.trim())
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание продукта',
        example: 'Свежий и легкий аромат'
    })
    @IsString()
    @IsNotEmpty()
    @Length(10,255)
    @Transform(({ value }) => value?.trim())
    description: string;
}