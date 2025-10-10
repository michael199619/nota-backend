import { ApiProperty } from "@nestjs/swagger";
import { SalaryValueType } from "apps/microservice/users/src/db/prisma.service";
import { IsEnum, IsInt, IsNumber, IsPositive, IsString, IsUUID, Max, Min } from "class-validator";
import { randomUUID } from "crypto";
import { SalaryType } from "../../constants";

export class AddSalaryUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    @IsUUID()
    @IsString()
    id: string;

    @ApiProperty({
        enum: SalaryType,
        description: 'Тип зарплаты',
        example: SalaryType.FIX
    })
    @IsString()
    @IsEnum(SalaryType)
    type: SalaryType;

    @ApiProperty({
        enum: SalaryValueType,
        description: 'Тип оплаты',
        example: SalaryValueType.CURRENCY
    })
    @IsString()
    @IsEnum(SalaryValueType)
    valueType: SalaryValueType;

    @ApiProperty({
        type: Number,
        description: 'Сумма',
        example: '3'
    })
    @IsNumber()
    @Min(0)
    @IsPositive()
    val: number;

    @ApiProperty({
        type: Number,
        description: 'День зарплаты',
        example: '3'
    })
    @IsInt()
    @Min(1)
    @Max(31)
    day: number;
}