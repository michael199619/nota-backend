import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { SanitizeModule,UserPublisherModule } from '@perfume-platform/common';
import { PrismaModule } from '../../db/prisma.module';
import { appConfig } from '../../modules/config/config';
import { ConfigurationModule } from '../../modules/config/config.module';
import { CreateArticleUsecase } from './create-article.usecase';

@Module({
  imports: [
    PrismaModule,
    UserPublisherModule.register(),
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
  ],
  providers: [CreateArticleUsecase],
  exports: [CreateArticleUsecase],
})
export class CreateArticleModule { }
