import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetPerfumeByIdUsecase } from './get-perfume-by-id.usecase';

@Module({
  imports: [
    PrismaModule,
    UserPublisherModule.register()
  ],
  providers: [GetPerfumeByIdUsecase],
  exports: [GetPerfumeByIdUsecase],
})
export class GetPerfumeByIdModule { }
