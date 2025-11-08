import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetComponentsUsecase } from './get-components.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetComponentsUsecase],
  exports: [GetComponentsUsecase],
})
export class GetComponentsModule { }
