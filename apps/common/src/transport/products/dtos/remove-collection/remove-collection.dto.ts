import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveCollectionDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор коллекции',
        example: randomUUID()
    })
    @IsUUID()
    id: string;
}