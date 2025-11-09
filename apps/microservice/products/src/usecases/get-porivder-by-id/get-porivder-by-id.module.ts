import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetProvivderByIdUsecase } from './get-porivder-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetProvivderByIdUsecase],
  exports: [GetProvivderByIdUsecase],
})
export class GetPorivderByIdModule { }
