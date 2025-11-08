import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum,IsNotEmpty,IsOptional,IsString,IsUUID,Length } from "class-validator";
import { randomUUID } from "crypto";
import { MusicType } from "../../constants";

export class CreateMusicDto {
  @ApiProperty({
    type: String,
    required: false,
    description: 'Идентификатор трека',
    example: randomUUID()
  })
  @IsUUID()
  @IsOptional()
  trackId?: string;

  @ApiProperty({
    type: String,
    description: 'Название музыки',
    example: 'Ambient Sounds'
  })
  @IsString()
  @IsNotEmpty()
  @Length(2,255)
  @Transform(({ value }) => value?.trim())
  name: string;

  @ApiProperty({
    enum: MusicType,
    description: 'Тип музыки',
    example: MusicType.TRACK
  })
  @IsEnum(MusicType)
  type: MusicType;
}