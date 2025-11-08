import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { CreateMusicUsecase } from './create-music.usecase';

@Module({
  imports: [PrismaModule],
  providers: [CreateMusicUsecase],
  exports: [CreateMusicUsecase],
})
export class CreateMusicModule { }
