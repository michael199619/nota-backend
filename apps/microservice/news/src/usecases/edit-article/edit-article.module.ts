import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { CacheEntity,CacheModule,SanitizeModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { appConfig,articleCacheConfig } from '../../modules/config/config';
import { ConfigurationModule } from '../../modules/config/config.module';
import { EditArticleUsecase } from './edit-article.usecase';

@Module({
  imports: [
    PrismaModule,
    SanitizeModule.register({
      imports: [ConfigurationModule],
      inject: [appConfig.KEY],
      useFactory(config: ConfigType<typeof appConfig>) {
        return {
          imgHostAllowList: [config.host],
          hostName: config.host
        }
      }
    }),
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
  providers: [EditArticleUsecase],
  exports: [EditArticleUsecase],
})
export class EditArticleModule { }
