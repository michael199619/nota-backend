import { ClientKafka, ClientNats } from "@nestjs/microservices";
import { UserTopics, userTopics } from "./constants";
import { AddSalaryUserDto, AddSalaryUserResponse, ChangeRoleUserDto, ChangeRoleUserResponse, CreateUserDto, CreateUserResponse, EditUserDto, EditUserResponse, GetAllUsersDto, GetAllUsersResponse, GetRolesDto, GetRolesResponse, GetSalaryUserDto, GetSalaryUserResponse, GetSalaryUsersDto, GetSalaryUsersResponse, GetUserDto, GetUserResponse, RemoveSalaryUserDto, RemoveSalaryUserResponse, RemoveUserDto, RemoveUserResponse } from "./dtos";
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

    createUser(dto: CreateUserDto) {
        return this.natsService.send<CreateUserResponse>(UserTopics.getUser, dto)
    }

    editUser(dto: EditUserDto) {
        return this.natsService.send<EditUserResponse>(UserTopics.editUser, dto)
    }

    getAllUsers(dto: GetAllUsersDto) {
        return this.natsService.send<GetAllUsersResponse>(UserTopics.getAllUses, dto)
    }

    getRoles(dto: GetRolesDto) {
        return this.natsService.send<GetRolesResponse>(UserTopics.getRoles, dto)
    }

    getSalaryUser(dto: GetSalaryUserDto) {
        return this.natsService.send<GetSalaryUserResponse>(UserTopics.getSalaryUser, dto)
    }

    getSalaryUsers(dto: GetSalaryUsersDto) {
        return this.natsService.send<GetSalaryUsersResponse>(UserTopics.getSalaryUsers, dto)
    }

    getUser(dto: GetUserDto) {
        return this.natsService.send<GetUserResponse>(UserTopics.getUser, dto)
    }

    removeSalaryUser(dto: RemoveSalaryUserDto) {
        return this.kafkaService.send<RemoveSalaryUserResponse>(UserTopics.removeSalaryUser, dto)
    }

    removeUser(dto: RemoveUserDto) {
        return this.kafkaService.send<RemoveUserResponse>(UserTopics.removeUser, dto)
    }
}