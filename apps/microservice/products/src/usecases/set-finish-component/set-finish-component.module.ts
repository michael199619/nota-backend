import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { SetFinishComponentUsecase } from './set-finish-component.usecase';

@Module({
  imports: [PrismaModule],
  providers: [SetFinishComponentUsecase],
  exports: [SetFinishComponentUsecase],
})
export class SetFinishComponentModule { }
