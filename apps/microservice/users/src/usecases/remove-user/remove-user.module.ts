import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveUserUsecase } from './remove-user.usecase';

@Module({
    imports: [PrismaModule],
    providers: [RemoveUserUsecase],
    exports: [RemoveUserUsecase],
})
export class RemoveUserModule { }
