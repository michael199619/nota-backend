import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { SalaryType, SalaryValueType } from "../../constants";
import { GetAllUsers } from "../get-all-users";

export class Salary {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: Number,
        description: 'День зарплаты',
        example: 15
    })
    day: string;

    @ApiProperty({
        enum: SalaryType,
        description: 'Тип зарплаты',
        example: SalaryType.FIX
    })
    type: SalaryType;

    @ApiProperty({
        enum: SalaryValueType,
        description: 'Тип оплаты',
        example: SalaryValueType.CURRENCY
    })
    valueType: SalaryValueType;

    @ApiProperty({
        type: Number,
        description: 'Сумма',
        example: 10
    })
    val: number;
}

export class GetSalaryUserResponse extends GetAllUsers {
    @ApiProperty({
        type: Salary,
        description: 'Массив зарплат',
        isArray: true
    })
    salaries: Salary[]
}