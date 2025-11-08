import { ApiProperty,PickType } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { GetCollections } from "../get-collections";
import { GetMusicByIdResponse } from "../get-music-by-id";
import { GetPerfumeByIdResponse } from "../get-perfume-by-id";

enum ProductItemEntity {
    PERFUME='PERFUME'
}

export class GetProductPerfume extends PickType(GetPerfumeByIdResponse,['authorId','id','sex','volume']) {

}

export class GetProductByIdResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор продукта',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: Boolean,
        description: 'Продукт из коллекции или нет',
        example: true
    })
    isCollection: boolean;

    @ApiProperty({
        type: GetCollections,
        description: 'Продукт из коллекции или нет',
    })
    collection: GetCollections|null;

    @ApiProperty({
        type: Number,
        description: 'Сумма одного продукта',
        example: 5000
    })
    currentPrice: number;

    @ApiProperty({
        type: String,
        description: 'Наименование продукта',
        example: 'Glissando'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание продукта',
        example: `— Скольжение пальцев по клавишам, перелив, плавность, неуловимая точка между вдохом и выдохом

Это парфюмерная метафора непрерывности: то, что не позволяет застыть, а ведёт дальше, мягко, но необратимо`
    })
    description: string;

    @ApiProperty({
        type: GetMusicByIdResponse,
        description: 'Композиция продукта'
    })
    music: GetMusicByIdResponse;

    @ApiProperty({
        type: Number,
        description: 'Экземпляров продукта',
        example: 7
    })
    count: number;

    @ApiProperty({
        type: String,
        description: 'Тип продукта',
        example: ProductItemEntity.PERFUME
    })
    entity: `${ProductItemEntity}`;

    @ApiProperty({
        type: GetProductPerfume,
        description: 'Парфюм'
    })
    perfume: GetProductPerfume|null
}