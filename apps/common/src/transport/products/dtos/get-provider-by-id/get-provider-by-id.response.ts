import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class GetProviderByIdResponse {
    @ApiProperty({
        type: String,
        description: 'Идентификатор поставщика',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Наименовае поставщика',
        example: 'Pro.candle'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Адрес поставщика',
        example: '12-я красноармейская ул., 26'
    })
    address: string;

    @ApiProperty({
        type: String,
        description: 'Сайт поставщика',
        example: 'https://procandle.store'
    })
    site: string;

}