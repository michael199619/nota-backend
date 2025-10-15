import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetSalaryUsersUsecase } from './get-salary-users.usecase';

@Module({
    imports: [PrismaModule],
    providers: [GetSalaryUsersUsecase],
    exports: [GetSalaryUsersUsecase],
})
export class GetSalaryUsersModule { }
