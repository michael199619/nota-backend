import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { CollectionStatus } from "../../constants";

export class ChangeStatusOfCollectionResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        enum: CollectionStatus,
        description: 'Статус коллекции',
        example: CollectionStatus.PUBLISH
    })
    status: CollectionStatus;

    @ApiProperty({
        type: Date,
        description: 'Дата обновления',
        example: new Date()
    })
    updatedAt: Date;
}