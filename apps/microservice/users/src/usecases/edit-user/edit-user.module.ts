import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { EditUserUsecase } from './edit-user.usecase';

@Module({
    imports: [PrismaModule],
    providers: [EditUserUsecase],
    exports: [EditUserUsecase],
})
export class EditUserModule { }
