import { OmitType } from "@nestjs/swagger";
import { AddSalaryUserDto, ChangeRoleUserDto, EditUserDto, GetSalaryUserDto, GetUserDto, RemoveSalaryUserDto } from "@perfume-platform/common";

export class AdminEditUserDto extends OmitType(EditUserDto, ['id']) {

}

export class AdminAddSalaryUserDto extends OmitType(AddSalaryUserDto, ['id']) {

}

export class AdminChangeRoleUserDto extends OmitType(ChangeRoleUserDto, ['id']) {

}

export class AdminGetSalaryUserDto extends OmitType(GetSalaryUserDto, ['id']) {

}

export class AdminGetUserDto extends OmitType(GetUserDto, ['id']) {

}

export class AdminRemoveSalaryUserDto extends OmitType(RemoveSalaryUserDto, ['userId']) {

}