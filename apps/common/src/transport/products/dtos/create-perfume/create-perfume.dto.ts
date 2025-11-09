import { ApiProperty } from "@nestjs/swagger";
import { Transform,Type } from "class-transformer";
import { IsEnum,IsInt,IsNotEmpty,IsNumber,IsString,IsUUID,Length,ValidateNested } from "class-validator";
import { randomUUID } from "crypto";
import { ComponentLvl,Sex } from "../../constants";

export class CreatePerfumeComponent {
  @ApiProperty({
    type: String,
    description: 'Идентификатор компонента',
    example: randomUUID()
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    type: Number,
    description: 'Индекс компонента в парфюме',
    example: 1
  })
  @IsInt()
  index: number;

  @ApiProperty({
    enum: ComponentLvl,
    description: 'Уровень компонента в парфюме',
    example: ComponentLvl.MIDDLE
  })
  @IsEnum(ComponentLvl)
  lvl: ComponentLvl;

  @ApiProperty({
    type: Number,
    description: 'Объем компонента',
    example: 1
  })
  @IsNumber()
  volume: number;
}

export class CreatePerfumeDto {
  @ApiProperty({
    type: String,
    description: 'Идентификатор пользователя',
    example: randomUUID()
  })
  @IsUUID()
  authorId: string;

  @ApiProperty({
    enum: Sex,
    description: 'Для кого парфюм',
    example: Sex.UNISEX
  })
  @IsEnum(Sex)
  sex: Sex;

  @ApiProperty({
    type: String,
    description: 'Описание автора',
    example: 'Свежий и легкий аромат для повседневного использования'
  })
  @IsString()
  @IsNotEmpty()
  @Length(10,1000)
  @Transform(({ value }) => value?.trim())
  authorDescription: string;

  @ApiProperty({
    type: CreatePerfumeComponent,
    isArray: true,
    description: 'Компоненты в парфюме'
  })
  @Type(() => CreatePerfumeComponent)
  @ValidateNested()
  components: CreatePerfumeComponent[];
}
