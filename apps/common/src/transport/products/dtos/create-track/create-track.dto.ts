import { ApiProperty } from "@nestjs/swagger";
import { IsOptional,IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class CreateTrackDto {
    @ApiProperty({
        type: String,
        description: 'Короткий трек ID',
        example: randomUUID()
    })
    @IsUUID()
    shortTrackId: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Полный трек ID',
        example: randomUUID()
    })
    @IsUUID()
    @IsOptional()
    fullTrackId?: string;
}