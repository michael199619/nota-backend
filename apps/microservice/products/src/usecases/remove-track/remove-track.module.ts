import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveTrackUsecase } from './remove-track.usecase';

@Module({
  imports: [PrismaModule],
  providers: [RemoveTrackUsecase],
  exports: [RemoveTrackUsecase],
})
export class RemoveTrackModule { }
