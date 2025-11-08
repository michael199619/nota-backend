import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

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
        type: Date,
        description: 'Дата создания',
        example: new Date()
    })
    createdAt: Date;

    @ApiProperty({
        type: Date,
        description: 'Дата обновления',
        example: new Date()
    })
    updatedAt: Date;
}

