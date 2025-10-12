import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddSalaryUserDto, ChangeRoleUserDto, UserTopics } from '@perfume-platform/common';
import { AddSalaryUserUsecase } from './usecases/add-salary-user/add-salary-user.usecase';
import { ChangeRoleUserUsecase } from './usecases/change-role-user/change-role-user.usecase';

@Controller()
export class AppController {
  constructor(
    private readonly addSalaryUserUsecase: AddSalaryUserUsecase,
    private readonly changeRoleUserUsecase: ChangeRoleUserUsecase
  ) { }

  @MessagePattern(UserTopics.addSalaryUser)
  async addSalaryUser(dto: AddSalaryUserDto) {
    return await this.addSalaryUserUsecase.excecute(dto)
  }

  @MessagePattern(UserTopics.changeRoleUser)
  async changeRoleUser(dto: ChangeRoleUserDto) {
    return await this.changeRoleUserUsecase.excecute(dto)
  }
} 