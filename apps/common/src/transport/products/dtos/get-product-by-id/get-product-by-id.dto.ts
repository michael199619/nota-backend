import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";

export class GetProductByIdDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор продукта',
        example: randomUUID()
    })
    @IsUUID()
    id: string;
}