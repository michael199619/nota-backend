import { ApiProperty,OmitType } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";
import { CreatePerfumeDto } from "../create-perfume";

export class EditPerfumeDto extends OmitType(CreatePerfumeDto,['authorId']) {
  @ApiProperty({
    type: String,
    description: 'Идентификатор парфюма',
    example: randomUUID()
  })
  @IsUUID()
  id: string;
}
