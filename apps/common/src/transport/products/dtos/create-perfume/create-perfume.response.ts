import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { PerfumeStatus,Sex } from "../../constants";
import { CreatePerfumeComponent } from "./create-perfume.dto";

export class CreatePerfumeResponse {
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
  sex: Sex;

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
  status: PerfumeStatus;

  @ApiProperty({
    type: Date,
    description: 'Дата создания',
    example: new Date()
  })
  createdAt: Date;

  @ApiProperty({
    type: CreatePerfumeComponent,
    description: 'Компоненты в парфюме'
  })
  components: CreatePerfumeComponent[];
}
