import { Module } from '@nestjs/common';
import { AuthModule } from '../../modules/auth/auth.module';
import { LoginUserUsecase } from './login-user.usecase';

@Module({
    imports: [AuthModule],
    providers: [LoginUserUsecase],
    exports: [LoginUserUsecase],
})
export class LoginUserModule { }
