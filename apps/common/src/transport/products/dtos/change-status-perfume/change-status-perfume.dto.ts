import { ApiProperty } from "@nestjs/swagger";
import { IsEnum,IsUUID } from "class-validator";

import { randomUUID } from "crypto";
import { PerfumeStatus } from "../../constants";

export class ChangeStatusPerfumeDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор парфюма',
        example: randomUUID()
    })
    @IsUUID()
    id: string;

    @ApiProperty({
        enum: PerfumeStatus,
        description: 'Новый статус парфюма',
        example: PerfumeStatus.PUBLISH
    })
    @IsEnum(PerfumeStatus)
    status: PerfumeStatus;
}