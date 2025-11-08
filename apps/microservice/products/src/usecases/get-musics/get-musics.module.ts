import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetMusicsUsecase } from './get-musics.usecase';

@Module({
  imports: [PrismaModule],
  providers: [GetMusicsUsecase],
  exports: [GetMusicsUsecase],
})
export class GetMusicsModule { }
