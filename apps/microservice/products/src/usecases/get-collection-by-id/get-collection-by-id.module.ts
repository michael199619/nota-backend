import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetCollectionByIdUsecase } from './get-collection-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetCollectionByIdUsecase],
  exports: [GetCollectionByIdUsecase],
})
export class GetCollectionByIdModule { }
