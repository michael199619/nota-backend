import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class RemoveProviderDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор поставщика',
        example: randomUUID()
    })
    @IsUUID()
    id: string;
}