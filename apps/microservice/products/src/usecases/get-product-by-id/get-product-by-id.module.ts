import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetProductByIdUsecase } from './get-product-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetProductByIdUsecase],
  exports: [GetProductByIdUsecase],
})
export class GetProductByIdModule { }
