import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { PerfumeStatus } from "../../constants";

export class ChangeStatusPerfumeResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор парфюма',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        enum: PerfumeStatus,
        description: 'Статус парфюма',
        example: PerfumeStatus.PUBLISH
    })
    status: PerfumeStatus;

    @ApiProperty({
        type: Date,
        description: 'Дата обновления',
        example: new Date()
    })
    updatedAt: Date;
}