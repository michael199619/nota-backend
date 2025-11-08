import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsString,IsUUID } from "class-validator";
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
    type: String,
    description: 'Описание элемента коллекции',
    example: 'Главный аромат коллекции'
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'Индекс элемента в коллекции',
    example: 1
  })
  @IsNotEmpty()
  index: number;

  @ApiProperty({
    type: Array,
    description: 'Идентификаторы изображений в сторе',
    example: [randomUUID(),randomUUID()]
  })
  @IsUUID('4',{ each: true })
  imageIds: string[];
}