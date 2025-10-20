import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { LoginUserUsecase } from './login-user.usecase';

@Module({
    imports: [AuthUserModule, PrismaModule],
    providers: [LoginUserUsecase],
    exports: [LoginUserUsecase],
})
export class LoginUserModule { }
