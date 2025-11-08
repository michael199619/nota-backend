import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetCollectionsUsecase } from './get-collections.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetCollectionsUsecase],
  exports: [GetCollectionsUsecase],
})
export class GetCollectionsModule { }
