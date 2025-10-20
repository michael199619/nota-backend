import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { ChangePasswordUserUsecase } from './change-password-user.usecase';

@Module({
  imports: [AuthUserModule, PrismaModule],
  providers: [ChangePasswordUserUsecase],
  exports: [ChangePasswordUserUsecase],
})
export class ChangePasswordUserModule { }
