import { Injectable } from '@nestjs/common';
import { IUserController,RefreshTokenUserDto,RefreshTokenUserResponse,Usecase } from "@perfume-platform/common";
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class RefreshTokenUserUsecase extends Usecase<IUserController['refreshTokenUser']>{
  constructor(
    private readonly authService: AuthService
  ) {
    super();
  }

  public excecute(dto: RefreshTokenUserDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RefreshTokenUserDto): Promise<RefreshTokenUserResponse>{
    return this.authService.refresh(dto.id, dto.refreshToken);
  }
}
