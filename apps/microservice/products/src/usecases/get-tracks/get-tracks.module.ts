import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetTracksUsecase } from './get-tracks.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetTracksUsecase],
  exports: [GetTracksUsecase],
})
export class GetTracksModule { }
