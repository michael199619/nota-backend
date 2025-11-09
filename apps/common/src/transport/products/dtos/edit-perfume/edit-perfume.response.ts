import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { PerfumeStatus,Sex } from "../../constants";

export class EditPerfumeResponse {
  @ApiProperty({
    type: String,
    description: 'Идентификатор парфюма',
    example: randomUUID()
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Идентификатор пользователя',
    example: randomUUID()
  })
  authorId: string;

  @ApiProperty({
    enum: Sex,
    description: 'Пол для парфюма',
    example: Sex.UNISEX
  })
  sex: `${Sex}`;

  @ApiProperty({
    type: String,
    description: 'Описание автора',
    example: 'Свежий и легкий аромат для повседневного использования'
  })
  authorDescription: string;

  @ApiProperty({
    enum: PerfumeStatus,
    description: 'Статус парфюма',
    example: PerfumeStatus.DRAFT
  })
  status: `${PerfumeStatus}`;
}
