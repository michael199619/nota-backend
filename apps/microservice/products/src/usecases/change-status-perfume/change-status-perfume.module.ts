import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { ChangeStatusPerfumeUsecase } from './change-status-perfume.usecase';

@Module({
  imports: [PrismaModule],
  providers: [ChangeStatusPerfumeUsecase],
  exports: [ChangeStatusPerfumeUsecase],
})
export class ChangeStatusPerfumeModule { }
