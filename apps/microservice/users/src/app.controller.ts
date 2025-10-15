import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddSalaryUserDto, ChangeRoleUserDto, CreateUserDto, EditUserDto, GetAllUsersDto, GetRolesDto, GetSalaryUserDto, GetSalaryUsersDto, GetUserDto, IUserController, RemoveSalaryUserDto, RemoveUserDto, UserTopics } from '@perfume-platform/common';
import { AddSalaryUserUsecase } from './usecases/add-salary-user/add-salary-user.usecase';
import { ChangeRoleUserUsecase } from './usecases/change-role-user/change-role-user.usecase';
import { CreateUserUsecase } from './usecases/create-user/create-user.usecase';
import { EditUserUsecase } from './usecases/edit-user/edit-user.usecase';
import { GetAllUsersUsecase } from './usecases/get-all-users/get-all-users.usecase';
import { GetRolesUsecase } from './usecases/get-roles/get-roles.usecase';
import { GetSalaryUserUsecase } from './usecases/get-salary-user/get-salary-user.usecase';
import { GetSalaryUsersUsecase } from './usecases/get-salary-users/get-salary-users.usecase';
import { GetUserUsecase } from './usecases/get-user/get-user.usecase';
import { RemoveSalaryUserUsecase } from './usecases/remove-salary-user/remove-salary-user.usecase';
import { RemoveUserUsecase } from './usecases/remove-user/remove-user.usecase';

@Controller()
export class AppController implements IUserController {
  constructor(
    private readonly addSalaryUserUsecase: AddSalaryUserUsecase,
    private readonly changeRoleUserUsecase: ChangeRoleUserUsecase,
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly editUserUsecase: EditUserUsecase,
    private readonly removeUserUsecase: RemoveUserUsecase,
    private readonly removeSalaryUserUsecase: RemoveSalaryUserUsecase,
    private readonly getAllUsersUsecase: GetAllUsersUsecase,
    private readonly getRolesUsecase: GetRolesUsecase,
    private readonly getSalaryUserUsecase: GetSalaryUserUsecase,
    private readonly getSalaryUsersUsecase: GetSalaryUsersUsecase,
    private readonly getUserUsecase: GetUserUsecase
  ) { }

  @MessagePattern(UserTopics.addSalaryUser)
  async addSalaryUser(dto: AddSalaryUserDto) {
    return await this.addSalaryUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.changeRoleUser)
  async changeRoleUser(dto: ChangeRoleUserDto) {
    return await this.changeRoleUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.createUser)
  async createUser(dto: CreateUserDto) {
    return await this.createUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.editUser)
  async editUser(dto: EditUserDto) {
    return await this.editUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.removeUser)
  async removeUser(dto: RemoveUserDto) {
    return await this.removeUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.removeSalaryUser)
  async removeSalaryUser(dto: RemoveSalaryUserDto) {
    return await this.removeSalaryUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.getAllUses)
  async getAllUsers(dto: GetAllUsersDto) {
    return await this.getAllUsersUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.getRoles)
  async getRoles(dto: GetRolesDto) {
    return await this.getRolesUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.getSalaryUser)
  async getSalaryUser(dto: GetSalaryUserDto) {
    return await this.getSalaryUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.getSalaryUsers)
  async getSalaryUsers(dto: GetSalaryUsersDto) {
    return await this.getSalaryUsersUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.getUser)
  async getUser(dto: GetUserDto) {
    return await this.getUserUsecase.excecute(dto)
  }
} 