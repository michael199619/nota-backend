import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateUserUsecase } from './create-user.usecase';

@Module({
    imports: [PrismaModule],
    providers: [CreateUserUsecase],
    exports: [CreateUserUsecase],
})
export class CreateUserModule { }
