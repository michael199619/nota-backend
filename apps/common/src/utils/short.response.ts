import { ApiProperty } from "@nestjs/swagger";

export class ShortResponse<V> {
    @ApiProperty({
        description: 'Наименование',
    })
    label: string;

    @ApiProperty({
        description: 'Значение'
    })
    value: V
}