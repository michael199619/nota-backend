import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray,IsEnum,IsInt,IsNotEmpty,IsOptional,IsString,IsUUID,ValidateNested } from "class-validator";
import { randomUUID } from "crypto";
import { ComponentType } from "../../constants";

export class ComponentItemDto {
    @ApiProperty({
        type: String,
        description: 'Наименование компонента',
        example: randomUUID(),
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        enum: ComponentType,
        description: 'Тип компонента',
        example: ComponentType.ALCOHOL
    })
    @IsEnum(ComponentType)
    type: `${ComponentType}`;

    @ApiProperty({
        type: Number,
        description: 'Количество',
        example: 5
    })
    @IsNotEmpty()
    @IsInt()
    count: number;
}

export class BatchComponentsDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор провайдера',
        example: randomUUID(),
    })
    @IsUUID()
    providerId: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор чека компонента',
        example: randomUUID(),
        required: false
    })
    @IsUUID()
    @IsOptional()
    receiptId?: string;

    @ApiProperty({
        type: ComponentItemDto,
        description: 'Список компонентов',
        isArray: true
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ComponentItemDto)
    components: ComponentItemDto[];
}