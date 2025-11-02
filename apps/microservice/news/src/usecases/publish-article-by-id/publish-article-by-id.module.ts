import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { PublishArticleByIdUsecase } from './publish-article-by-id.usecase';

@Module({
  imports: [PrismaModule],
  providers: [PublishArticleByIdUsecase],
  exports: [PublishArticleByIdUsecase],
})
export class PublishArticleByIdModule { }
