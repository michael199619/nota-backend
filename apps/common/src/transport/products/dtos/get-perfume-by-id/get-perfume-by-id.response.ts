import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { ComponentLvl,ComponentType,PerfumeStatus,Sex } from "../../constants";

export class GetComponent {
  @ApiProperty({
    type: String,
    description: 'Идентификатор компонента',
    example: randomUUID()
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Идентификатор провайдера',
    example: randomUUID()
  })
  providerId: string;

  @ApiProperty({
    enum: ComponentType,
    description: 'Тип компонента',
    example: ComponentType.ALCOHOL
  })
  type: `${ComponentType}`;

  @ApiProperty({
    type: String,
    description: 'Название компонента'
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Описание компонента'
  })
  description: string|null;

  @ApiProperty({
    type: Number,
    description: 'Объем компонента',
    example: 5
  })
  volume: number;

  @ApiProperty({
    type: Number,
    description: 'Индекс компонента в парфюме',
    example: 5
  })
  index: number;

  @ApiProperty({
    enum: ComponentLvl,
    description: 'Уровень компонента в парфюме',
    example: ComponentLvl.MIDDLE
  })
  lvl: `${ComponentLvl}`;
}

export class GetPerfumeByIdResponse {
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
    example: PerfumeStatus.PUBLISH
  })
  status: `${PerfumeStatus}`;

  @ApiProperty({
    type: Number,
    description: 'Объем парфюма в миллилитрах',
    example: 10
  })
  volume: number;

  @ApiProperty({
    type: GetComponent,
    isArray: true,
    description: 'Список компонентов парфюма',
  })
  components: GetComponent[];
}
