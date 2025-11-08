import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { CollectionStatus } from "../../constants";

export class CreateCollectionResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Название коллекции',
        example: 'Весенняя коллекция 2024'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание коллекции',
        example: 'Свежие ароматы для весеннего сезона'
    })
    description: string;

    @ApiProperty({
        enum: CollectionStatus,
        description: 'Статус коллекции',
        example: CollectionStatus.DRAFT
    })
    status: CollectionStatus;

    @ApiProperty({
        type: Date,
        description: 'Дата создания',
        example: '2024-01-15T10:30:00Z'
    })
    createdAt: Date;
}