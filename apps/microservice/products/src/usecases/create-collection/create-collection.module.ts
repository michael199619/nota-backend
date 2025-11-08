import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateCollectionUsecase } from './create-collection.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreateCollectionUsecase],
  exports: [CreateCollectionUsecase],
})
export class CreateCollectionModule { }
