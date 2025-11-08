import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateProviderUsecase } from './create-provider.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreateProviderUsecase],
  exports: [CreateProviderUsecase],
})
export class CreateProviderModule { }
