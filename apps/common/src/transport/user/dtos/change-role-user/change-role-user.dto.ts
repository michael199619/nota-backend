import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class ChangeRoleUserDto {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Идентификатор роли',
        example: randomUUID()
    })
    roleId: string;
}