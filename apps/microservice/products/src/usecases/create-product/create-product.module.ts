import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateProductUsecase } from './create-product.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreateProductUsecase],
  exports: [CreateProductUsecase],
})
export class CreateProductModule { }
