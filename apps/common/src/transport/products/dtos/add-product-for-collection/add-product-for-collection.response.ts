import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class AddProductForCollectionResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор элемента коллекции',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор продукта',
        example: randomUUID()
    })
    productId: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    collectionId: string;

    @ApiProperty({
        type: Number,
        description: 'Индекс элемента в коллекции',
        example: 1
    })
    index: number;

    @ApiProperty({
        type: Array,
        description: 'Идентификаторы изображений',
        example: [randomUUID(),randomUUID()]
    })
    imageIds: string[];
}