import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetSalaryUserModule } from '../get-salary-user/get-salary-user.module';
import { RemoveSalaryUserUsecase } from './remove-salary-user.usecase';

@Module({
    imports: [PrismaModule, GetSalaryUserModule],
    providers: [RemoveSalaryUserUsecase],
    exports: [RemoveSalaryUserUsecase],
})
export class RemoveSalaryUserModule { }
