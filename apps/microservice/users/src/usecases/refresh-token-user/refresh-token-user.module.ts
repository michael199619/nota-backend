import { Module } from '@nestjs/common';
import { AuthModule } from '../../modules/auth/auth.module';
import { RefreshTokenUserUsecase } from './refresh-token-user.usecase';

@Module({
  imports: [AuthModule],
  providers: [RefreshTokenUserUsecase],
  exports: [RefreshTokenUserUsecase],
})
export class RefreshTokenUserModule { }
