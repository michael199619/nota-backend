import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductsRepository } from './products/products.repository';

@Module({
  providers: [
    PrismaService,
    ProductsRepository,
  ],
  exports: [
    PrismaService,
    ProductsRepository,
  ],
})
export class PrismaModule { }
