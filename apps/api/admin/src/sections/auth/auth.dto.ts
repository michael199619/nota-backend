import { OmitType } from "@nestjs/swagger";
import { ChangePasswordUserDto } from "@perfume-platform/common";

export class AdminChangePasswordUserDto extends  OmitType(ChangePasswordUserDto, ['id']) {

}