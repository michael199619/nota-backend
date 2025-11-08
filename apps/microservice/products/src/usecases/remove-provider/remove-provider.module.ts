import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveProviderUsecase } from './remove-provider.usecase';

@Module({
  imports: [PrismaModule],
  providers: [RemoveProviderUsecase],
  exports: [RemoveProviderUsecase],
})
export class RemoveProviderModule { }
