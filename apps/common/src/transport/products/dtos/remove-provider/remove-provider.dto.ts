import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class RemoveProviderDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор поставщика',
        example: '550e8400-e29b-41d4-a716-446655440000'
    })
    @IsUUID()
    id: string;
}