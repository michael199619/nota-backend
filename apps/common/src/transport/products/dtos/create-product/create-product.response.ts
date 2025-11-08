import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateProductResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор продукта',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: Boolean,
        description: 'Является ли продукт коллекцией',
        example: true
    })
    isCollection: boolean;

    @ApiProperty({
        type: String,
        description: 'Идентификатор музыки',
        example: randomUUID()
    })
    musicId: string;

    @ApiProperty({
        type: Number,
        description: 'Текущая цена',
        example: 99.99
    })
    currentPrice: number;

    @ApiProperty({
        type: String,
        description: 'Название продукта',
        example: 'Весенний аромат'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание продукта',
        example: 'Свежий и легкий аромат'
    })
    description: string;
}