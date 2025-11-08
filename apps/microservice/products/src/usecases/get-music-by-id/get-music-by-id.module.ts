import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetMusicByIdUsecase } from './get-music-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetMusicByIdUsecase],
  exports: [GetMusicByIdUsecase],
})
export class GetMusicByIdModule { }
