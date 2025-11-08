import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { ChangeStatusOfCollectionUsecase } from './change-status-of-collection.usecase';

@Module({
  imports: [PrismaModule],
  providers: [ChangeStatusOfCollectionUsecase],
  exports: [ChangeStatusOfCollectionUsecase],
})
export class ChangeStatusOfCollectionModule { }
