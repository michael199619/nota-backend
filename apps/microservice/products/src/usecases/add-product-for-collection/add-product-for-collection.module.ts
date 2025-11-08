import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { AddProductForCollectionUsecase } from './add-product-for-collection.usecase';

@Module({
  imports: [PrismaModule],
  providers: [AddProductForCollectionUsecase],
  exports: [AddProductForCollectionUsecase],
})
export class AddProductForCollectionModule { }
