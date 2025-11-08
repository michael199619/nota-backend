import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { MusicType } from "../../constants";

export class CreateMusicResponse {
  @ApiProperty({
    type: String,
    description: 'Идентификатор музыки',
    example: randomUUID()
  })
  id: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Идентификатор трека',
    example: randomUUID()
  })
  trackId?: string;

  @ApiProperty({
    type: String,
    description: 'Название музыки',
    example: 'Ambient Sounds'
  })
  name: string;

  @ApiProperty({
    enum: MusicType,
    description: 'Тип музыки',
    example: MusicType.TRACK
  })
  type: MusicType;

  @ApiProperty({
    type: Date,
    description: 'Дата создания',
    example: new Date()
  })
  createdAt: Date;
}