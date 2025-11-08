import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveCollectionUsecase } from './remove-collection.usecase';

@Module({
  imports: [PrismaModule],
  providers: [RemoveCollectionUsecase],
  exports: [RemoveCollectionUsecase],
})
export class RemoveCollectionModule { }
