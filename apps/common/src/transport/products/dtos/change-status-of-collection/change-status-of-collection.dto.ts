import { ApiProperty } from "@nestjs/swagger";
import { IsEnum,IsUUID } from "class-validator";
import { randomUUID } from "crypto";
import { CollectionStatus } from "../../constants";

export class ChangeStatusOfCollectionDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    @IsUUID()
    id: string;

    @ApiProperty({
        enum: CollectionStatus,
        description: 'Новый статус коллекции',
        example: CollectionStatus.PUBLISH
    })
    @IsEnum(CollectionStatus)
    status: CollectionStatus;
}