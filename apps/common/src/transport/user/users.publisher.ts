import { ClientKafka, ClientNats } from "@nestjs/microservices";
import { ControllerResponse } from "@perfume-platform/common";
import { UserTopics, userTopics } from "./constants";
import { AddSalaryUserDto, AddSalaryUserResponse, ChangeRoleUserDto, ChangeRoleUserResponse, CreateUserDto, CreateUserResponse, EditUserDto, EditUserResponse, GetAllUsersResponse, GetRolesDto, GetRolesResponse, GetSalaryUserDto, GetSalaryUserResponse, GetSalaryUsersDto, GetSalaryUsersResponse, GetUserDto, GetUserResponse, RemoveSalaryUserDto, RemoveSalaryUserResponse, RemoveUserDto, RemoveUserResponse } from "./dtos";
import { IUserController } from "./user.interface";

export class UsersPublisher implements IUserController {
    constructor(
        private kafkaService: ClientKafka,
        private natsService: ClientNats
    ) {
    }

    private async onApplicationBootstrap() {
        userTopics.forEach(pattern => this.kafkaService.subscribeToResponseOf(pattern))
        await this.kafkaService.connect()
    }

    addSalaryUser(dto: AddSalaryUserDto) {
        return this.kafkaService.send<AddSalaryUserResponse>(UserTopics.addSalaryUser, dto)
    }

    changeRoleUser(dto: ChangeRoleUserDto) {
        return this.kafkaService.send<ChangeRoleUserResponse>(UserTopics.changeRoleUser, dto)
    }

    createUser(dto: CreateUserDto): ControllerResponse<CreateUserResponse> {
        return this.natsService.send(UserTopics.getUser, dto)
    }

    editUser(dto: EditUserDto): ControllerResponse<EditUserResponse> {
        return this.natsService.send(UserTopics.editUser, dto)
    }

    getAllUsers(dto: GetAllUsersResponse): ControllerResponse<GetAllUsersResponse> {
        return this.natsService.send(UserTopics.getAllUses, dto)
    }

    getRoles(dto: GetRolesDto): ControllerResponse<GetRolesResponse> {
        return this.natsService.send(UserTopics.getRoles, dto)
    }

    getSalaryUser(dto: GetSalaryUserDto): ControllerResponse<GetSalaryUserResponse> {
        return this.natsService.send(UserTopics.getSalaryUser, dto)
    }

    getSalaryUsers(dto: GetSalaryUsersDto): ControllerResponse<GetSalaryUsersResponse> {
        return this.natsService.send(UserTopics.getSalaryUsers, dto)
    }

    getUser(dto: GetUserDto): ControllerResponse<GetUserResponse> {
        return this.natsService.send(UserTopics.getUser, dto)
    }

    removeSalaryUser(dto: RemoveSalaryUserDto): ControllerResponse<RemoveSalaryUserResponse> {
        return this.kafkaService.send(UserTopics.removeSalaryUser, dto)
    }

    removeUser(dto: RemoveUserDto): ControllerResponse<RemoveUserResponse> {
        return this.kafkaService.send(UserTopics.removeUser, dto)
    }
}