import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetSalaryUserUsecase } from './get-salary-user.usecase';

@Module({
    imports: [PrismaModule],
    providers: [GetSalaryUserUsecase],
    exports: [GetSalaryUserUsecase],
})
export class GetSalaryUserModule { }
