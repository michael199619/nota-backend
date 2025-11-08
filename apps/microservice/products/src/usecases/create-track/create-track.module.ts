import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateTrackUsecase } from './create-track.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreateTrackUsecase],
  exports: [CreateTrackUsecase],
})
export class CreateTrackModule { }
