import { Module } from '@nestjs/common';
import { AuthModule } from '../../modules/auth/auth.module';
import { LogoutUserUsecase } from './logout-user.usecase';

@Module({
  imports: [AuthModule],
  providers: [LogoutUserUsecase],
  exports: [LogoutUserUsecase],
})
export class LogoutUserModule { }
