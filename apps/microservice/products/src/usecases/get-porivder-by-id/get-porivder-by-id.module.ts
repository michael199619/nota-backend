import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetPorivderByIdUsecase } from './get-porivder-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetPorivderByIdUsecase],
  exports: [GetPorivderByIdUsecase],
})
export class GetPorivderByIdModule { }
