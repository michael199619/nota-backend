import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { BatchComponentsUsecase } from './batch-components.usecase';

@Module({
  imports: [PrismaModule],
  providers: [BatchComponentsUsecase],
  exports: [BatchComponentsUsecase],
})
export class BatchComponentsModule { }
