import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { randomUUID } from "crypto";
import { CreateUserDto } from "../create-user";
export class EditUserDto extends PartialType(PickType(CreateUserDto, ['name', 'phone', 'avatarId', 'email'])) {
    @ApiProperty({
        type: String,
        description: 'Идентификатор пользователя',
        example: randomUUID()
    })
    @IsUUID()
    id: string;
}