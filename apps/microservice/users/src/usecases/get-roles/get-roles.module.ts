import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetRolesUsecase } from './get-roles.usecase';

@Module({
    imports: [PrismaModule],
    providers: [GetRolesUsecase],
    exports: [GetRolesUsecase],
})
export class GetRolesModule { }
