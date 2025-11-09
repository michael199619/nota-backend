import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateProviderResponse {
  @ApiProperty({
    type: String,
    description: 'Идентификатор поставщика',
    example: randomUUID()
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Название поставщика',
    example: 'Chanel'
  })
  name: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Адрес поставщика',
    example: '123 Rue de Rivoli, Paris, France'
  })
  address: string|null;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Сайт поставщика',
    example: 'https://www.chanel.com'
  })
  site: string|null;
}
