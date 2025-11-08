import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveProductFromCollectionDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор элемента коллекции',
        example: randomUUID()
    })
    @IsUUID()
    collectionItemId: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    @IsUUID()
    collectionId: string;
}