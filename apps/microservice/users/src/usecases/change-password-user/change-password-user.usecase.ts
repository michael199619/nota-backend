import { ForbiddenException,Injectable } from '@nestjs/common';
import { ChangePasswordUserDto,ChangePasswordUserResponse,IUserController,PasswordHasher,Usecase } from "@perfume-platform/common";
import { UsersRepository } from '../../db/users/users.repository';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class ChangePasswordUserUsecase extends Usecase<IUserController['changePasswordUser']>{
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UsersRepository
  ) {
    super();
  }

  public excecute(dto: ChangePasswordUserDto) {
    return super.excecute(dto);
  }

  public async handler(dto: ChangePasswordUserDto): Promise<ChangePasswordUserResponse>{
    const user = await this.userRepository.getShortUserById(dto.id);

    if (!user || !PasswordHasher.verify(dto.oldPassword, user.password)) {
      throw new ForbiddenException();
    }

    await this.userRepository.changePasswordUser(dto.id, await PasswordHasher.getHashPassword(dto.newPassword));

    await this.authService.logoutAll(user.id);

    return await this.authService.login(user.login, dto.newPassword);
  }
}
