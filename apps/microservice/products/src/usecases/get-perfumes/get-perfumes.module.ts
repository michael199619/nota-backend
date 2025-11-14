import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetPerfumesUsecase } from './get-perfumes.usecase';

@Module({
  imports: [
    PrismaModule,
    UserPublisherModule.register()
  ],
  providers: [GetPerfumesUsecase],
  exports: [GetPerfumesUsecase],
})
export class GetPerfumesModule { }
