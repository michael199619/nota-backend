import { ControllerResponse } from "../../utils";
import { AddSalaryUserDto, AddSalaryUserResponse, ChangeRoleUserDto, ChangeRoleUserResponse, CreateUserDto, CreateUserResponse, EditUserDto, EditUserResponse, GetAllUsersDto, GetAllUsersResponse, GetRolesDto, GetRolesResponse, GetSalaryUserDto, GetSalaryUserResponse, GetUserDto, GetUserResponse, RemoveSalaryUserDto, RemoveSalaryUserResponse, RemoveUserDto, RemoveUserResponse } from "./dtos";
import { GetSalaryUsersDto, GetSalaryUsersResponse } from "./dtos/get-salary-users";

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
}