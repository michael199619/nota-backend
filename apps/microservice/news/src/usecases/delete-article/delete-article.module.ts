import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { CacheEntity,CacheModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { articleCacheConfig } from '../../modules/config/config';
import { DeleteArticleUsecase } from './delete-article.usecase';

@Module({
  imports: [
    PrismaModule,
    CacheModule.register({
      inject: [articleCacheConfig.KEY],
      useFactory(config: ConfigType<typeof articleCacheConfig>) {
        return {
          ttl: config.ttl,
          entity: CacheEntity.ARTICLE
        }
      }
    }),
  ],
  providers: [DeleteArticleUsecase],
  exports: [DeleteArticleUsecase],
})
export class DeleteArticleModule { }
