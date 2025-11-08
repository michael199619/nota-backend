import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveProductFromCollectionUsecase } from './remove-product-from-collection.usecase';

@Module({
  imports: [PrismaModule],
  providers: [RemoveProductFromCollectionUsecase],
  exports: [RemoveProductFromCollectionUsecase],
})
export class RemoveProductFromCollectionModule { }
