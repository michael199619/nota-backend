import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class GetPerfumeByIdDto {
  @ApiProperty({
    type: String,
    description: 'Идентификатор парфюма',
    example: randomUUID()
  })
  @IsUUID()
  id: string;
}
