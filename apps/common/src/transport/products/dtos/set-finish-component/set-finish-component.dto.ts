import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsOptional,IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class SetFinishComponentDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор компонента',
        example: randomUUID()
    })
    @IsUUID()
    id: string;

    @ApiProperty({
        type: Number,
        description: 'Сколько израсходовали компонента',
        example: 1
    })
    @IsInt()
    count: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Идентификатор чека',
        example: randomUUID()
    })
    @IsUUID()
    @IsOptional()
    receiptId?: string;
}