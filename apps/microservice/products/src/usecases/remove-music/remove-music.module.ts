import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { RemoveMusicUsecase } from './remove-music.usecase';

@Module({
  imports: [PrismaModule],
  providers: [RemoveMusicUsecase],
  exports: [RemoveMusicUsecase],
})
export class RemoveMusicModule { }
