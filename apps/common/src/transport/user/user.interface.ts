import { ControllerResponse } from "../../utils";
import { AddSalaryUserDto, AddSalaryUserResponse, ChangePasswordUserDto, ChangePasswordUserResponse, ChangeRoleUserDto, ChangeRoleUserResponse, CreateUserDto, CreateUserResponse, EditUserDto, EditUserResponse, GetAllUsersDto, GetAllUsersResponse, GetRolesDto, GetRolesResponse, GetSalaryUserDto, GetSalaryUserResponse, GetSalaryUsersDto, GetSalaryUsersResponse, GetUserDto, GetUserResponse, LoginUserDto, LoginUserResponse, LogoutUserDto, LogoutUserResponse, RefreshTokenUserDto, RefreshTokenUserResponse, RemoveSalaryUserDto, RemoveSalaryUserResponse, RemoveUserDto, RemoveUserResponse } from "./dtos";

export interface IUserTransportOptions {
    clientId: string;
    kafkaBrokers: string[];
    natsServers: string[];
}

export type IUserController = {
    addSalaryUser(dto: AddSalaryUserDto): ControllerResponse<AddSalaryUserResponse>
    changeRoleUser(dto: ChangeRoleUserDto): ControllerResponse<ChangeRoleUserResponse>
    createUser(dto: CreateUserDto): ControllerResponse<CreateUserResponse>
    editUser(dto: EditUserDto): ControllerResponse<EditUserResponse>
    getAllUsers(dto: GetAllUsersDto): ControllerResponse<GetAllUsersResponse>
    getRoles(dto: GetRolesDto): ControllerResponse<GetRolesResponse>
    getSalaryUser(dto: GetSalaryUserDto): ControllerResponse<GetSalaryUserResponse>
    getSalaryUsers(dto: GetSalaryUsersDto): ControllerResponse<GetSalaryUsersResponse>
    getUser(dto: GetUserDto): ControllerResponse<GetUserResponse>
    removeSalaryUser(dto: RemoveSalaryUserDto): ControllerResponse<RemoveSalaryUserResponse>
    removeUser(dto: RemoveUserDto): ControllerResponse<RemoveUserResponse>
    changePasswordUser(dto: ChangePasswordUserDto): ControllerResponse<ChangePasswordUserResponse>
    loginUser(dto: LoginUserDto): ControllerResponse<LoginUserResponse>
    logoutUser(dto: LogoutUserDto): ControllerResponse<LogoutUserResponse>
    refreshTokenUser(dto: RefreshTokenUserDto): ControllerResponse<RefreshTokenUserResponse>

}