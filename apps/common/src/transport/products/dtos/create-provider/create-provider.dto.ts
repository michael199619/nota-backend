import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty,IsOptional,IsString,IsUrl,Length } from "class-validator";

export class CreateProviderDto {
  @ApiProperty({
    type: String,
    description: 'Название поставщика',
    example: 'Chanel'
  })
  @IsString()
  @IsNotEmpty()
  @Length(2,255)
  @Transform(({ value }) => value?.trim())
  name: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Адрес поставщика',
    example: '123 Rue de Rivoli, Paris, France'
  })
  @IsString()
  @IsOptional()
  @Length(0,255)
  @Transform(({ value }) => value?.trim())
  address?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Сайт поставщика',
    example: 'https://www.chanel.com'
  })
  @IsUrl()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  site?: string;
}
