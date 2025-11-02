import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { GetArticlesUsecase } from './get-articles.usecase';

@Module({
  imports: [
    PrismaModule,
    UserPublisherModule.register()
  ],
  providers: [GetArticlesUsecase],
  exports: [GetArticlesUsecase],
})
export class GetArticlesModule { }
