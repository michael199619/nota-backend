import { ApiProperty } from "@nestjs/swagger";

export class ShortResponse {
    @ApiProperty({
        description: 'Наименование',
    })
    name: string;

    @ApiProperty({
        description: 'Идентификатор'
    })
    id: string
}