import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty,IsString,Length } from "class-validator";

export class CreateCollectionDto {
    @ApiProperty({
        type: String,
        description: 'Название коллекции',
        example: 'Gamma'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    @Transform(({ value }) => value?.trim())
    name: string;

    @ApiProperty({
        type: String,
        description: 'Описание коллекции',
        example: 'Лиммитированная коллекция чувственных образов'
    })
    @IsString()
    @IsNotEmpty()
    @Length(10,1000)
    @Transform(({ value }) => value?.trim())
    description: string;
}