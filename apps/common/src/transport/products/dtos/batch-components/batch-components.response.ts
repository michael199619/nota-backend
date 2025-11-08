import { ApiProperty } from "@nestjs/swagger";

export class BatchComponentsResponse {
    @ApiProperty({
        type: Number,
        description: 'Количество новых компонентов',
        example: 10
    })
    newComponentCount: number;

    @ApiProperty({
        type: Number,
        description: 'Количество старых компонентов',
        example: 10
    })
    oldComponentCount: number;
}