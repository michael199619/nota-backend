import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetPerfumeByIdUsecase } from './get-perfume-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetPerfumeByIdUsecase],
  exports: [GetPerfumeByIdUsecase],
})
export class GetPerfumeByIdModule { }
