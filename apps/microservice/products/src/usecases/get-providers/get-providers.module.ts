import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetProviderUsecase } from './get-providers.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetProviderUsecase],
  exports: [GetProviderUsecase],
})
export class GetProviderModule { }
