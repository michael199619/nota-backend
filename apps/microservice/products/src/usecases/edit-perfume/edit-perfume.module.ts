import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { EditPerfumeUsecase } from './edit-perfume.usecase';

@Module({
  imports: [PrismaModule],
  providers: [EditPerfumeUsecase],
  exports: [EditPerfumeUsecase],
})
export class EditPerfumeModule { }
