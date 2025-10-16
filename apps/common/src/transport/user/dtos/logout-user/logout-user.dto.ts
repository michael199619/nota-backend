import { PickType } from "@nestjs/swagger";
import { GetUserDto } from "../get-user";

export class LogoutUserDto extends PickType(GetUserDto, ['id']) {
}