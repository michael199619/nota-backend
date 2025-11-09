import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { CollectionStatus } from "../../constants";

export class GetCollectionItem {
    @ApiProperty({
        type: String,
        description: 'Идентификатор элемента коллекции',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор продукта коллекции',
        example: randomUUID()
    })
    productId?: string;

    @ApiProperty({
        type: String,
        description: 'Имя продукта',
        example: 'Glissando'
    })
    name?: string;

    @ApiProperty({
        type: Number,
        description: 'Индекс элемента коллекции',
        example: 1
    })
    index: number;

    @ApiProperty({
        type: String,
        description: 'Массив идентификаторов на стор',
        example: [randomUUID(),randomUUID()]
    })
    imageIds: string[];
}
export class GetCollectionByIdResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Наименование коллекции',
        example: 'Gamma'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание коллекции',
        example: 'Коллекция чувственных образов'
    })
    description: string;

    @ApiProperty({
        enum: CollectionStatus,
        description: 'Описание коллекции',
        example: CollectionStatus.PUBLISH
    })
    status: `${CollectionStatus}`;

    @ApiProperty({
        type: String,
        description: 'Массив идентификаторов на стор',
        example: [randomUUID(),randomUUID()]
    })
    imageIds: string[];
}

