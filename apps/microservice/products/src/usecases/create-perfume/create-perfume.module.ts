import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreatePerfumeUsecase } from './create-perfume.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreatePerfumeUsecase],
  exports: [CreatePerfumeUsecase],
})
export class CreatePerfumeModule { }
