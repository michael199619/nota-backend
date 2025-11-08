import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetPerfumesUsecase } from './get-perfumes.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetPerfumesUsecase],
  exports: [GetPerfumesUsecase],
})
export class GetPerfumesModule { }
