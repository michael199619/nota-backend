import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class AddProductForCollectionDto {
  @ApiProperty({
    type: String,
    description: 'Идентификатор продукта',
    example: randomUUID()
  })
  @IsUUID()
  productId: string;

  @ApiProperty({
    type: String,
    description: 'Идентификатор коллекции',
    example: randomUUID()
  })
  @IsUUID()
  collectionId: string;

  @ApiProperty({
    type: Number,
    description: 'Индекс элемента в коллекции',
    example: 1
  })
  @IsInt()
  index: number;

  @ApiProperty({
    type: Array,
    description: 'Идентификаторы изображений в сторе',
    example: [randomUUID(),randomUUID()]
  })
  @IsUUID(undefined,{ each: true })
  imageIds: string[];
}