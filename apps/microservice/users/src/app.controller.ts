import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddSalaryUserDto,ChangePasswordUserDto,ChangeRoleUserDto,CreateUserDto,EditUserDto,GetAllUsersDto,GetRolesDto,GetSalaryUserDto,GetSalaryUsersDto,GetUserDto,IUserController,LoginUserDto,LogoutUserDto,RefreshTokenUserDto,RemoveSalaryUserDto,RemoveUserDto,UserSubject,UserTopics } from '@perfume-platform/common';
import { AddSalaryUserUsecase } from './usecases/add-salary-user/add-salary-user.usecase';
import { ChangePasswordUserUsecase } from './usecases/change-password-user/change-password-user.usecase';
import { ChangeRoleUserUsecase } from './usecases/change-role-user/change-role-user.usecase';
import { CreateUserUsecase } from './usecases/create-user/create-user.usecase';
import { EditUserUsecase } from './usecases/edit-user/edit-user.usecase';
import { GetAllUsersUsecase } from './usecases/get-all-users/get-all-users.usecase';
import { GetRolesUsecase } from './usecases/get-roles/get-roles.usecase';
import { GetSalaryUserUsecase } from './usecases/get-salary-user/get-salary-user.usecase';
import { GetSalaryUsersUsecase } from './usecases/get-salary-users/get-salary-users.usecase';
import { GetUserUsecase } from './usecases/get-user/get-user.usecase';
import { LoginUserUsecase } from './usecases/login-user/login-user.usecase';
import { LogoutUserUsecase } from './usecases/logout-user/logout-user.usecase';
import { RefreshTokenUserUsecase } from './usecases/refresh-token-user/refresh-token-user.usecase';
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
    private readonly getUserUsecase: GetUserUsecase,
    private readonly loginUserUsecase: LoginUserUsecase,
    private readonly logoutUserUsecase: LogoutUserUsecase,
    private readonly changePasswordUserUsecase: ChangePasswordUserUsecase,
    private readonly refreshTokenUserUsecase: RefreshTokenUserUsecase
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

  @MessagePattern(UserSubject.getAllUses)
  async getAllUsers(dto: GetAllUsersDto) {
    return await this.getAllUsersUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.getRoles)
  async getRoles(dto: GetRolesDto) {
    return await this.getRolesUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.getSalaryUser)
  async getSalaryUser(dto: GetSalaryUserDto) {
    return await this.getSalaryUserUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.getSalaryUsers)
  async getSalaryUsers(dto: GetSalaryUsersDto) {
    return await this.getSalaryUsersUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.getUser)
  async getUser(dto: GetUserDto) {
    return await this.getUserUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.loginUser)
  async loginUser(dto: LoginUserDto) {
    return await this.loginUserUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.logoutUser)
  async logoutUser(dto: LogoutUserDto) {
    return await this.logoutUserUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.changePasswordUser)
  async changePasswordUser(dto: ChangePasswordUserDto) {
    return await this.changePasswordUserUsecase.excecute(dto)
  }

  @MessagePattern(UserSubject.refreshTokenUser)
  async refreshTokenUser(dto: RefreshTokenUserDto) {
    return await this.refreshTokenUserUsecase.excecute(dto)
  }
} 