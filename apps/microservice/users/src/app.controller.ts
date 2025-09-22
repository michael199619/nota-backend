import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IUserController, IUserGet, IUserGetPerfume, UserTopics } from '@perfume-platform/common';
import { UserGetPerfumeUsecase } from './usecases/user-get-perfume/user-get.perfume.usecase';
import { UserGetUsecase } from './usecases/user-get/user-get.usecase';

@Controller()
export class AppController implements IUserController {
  constructor(
    private readonly userGetUsecase: UserGetUsecase,
    private readonly userGetPerfumeUsecase: UserGetPerfumeUsecase
  ) { }

  @MessagePattern(UserTopics.USER_GET_PERFUME)
  userGetPerfume(@Payload() data: IUserGetPerfume) {
    return this.userGetPerfumeUsecase.excecute(data)
  }

  @MessagePattern(UserTopics.USER_GET)
  userGet(@Payload() data: IUserGet) {
    return this.userGetUsecase.excecute(data)
  }
} 