import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ContextModule } from '@perfume-platform/common';
import { redisConfig } from './modules/config/config';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AuthModule } from './sections/auth/auth.module';
import { CollectionModule } from './sections/collection/collection.module';
import { ComponentModule } from './sections/component/component.module';
import { MusicModule } from './sections/music/music.module';
import { NewsModule } from './sections/news/news.module';
import { PerfumeModule } from './sections/perfume/perfume.module';
import { ProductModule } from './sections/product/product.module';
import { ProviderModule } from './sections/provider/provider.module';
import { RoleModule } from './sections/role/role.module';
import { UserModule } from './sections/user/user.module';

@Module({
  imports: [
    ContextModule,
    TransportModule,
    RedisModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [redisConfig.KEY],
      useFactory(config: ConfigType<typeof redisConfig>) {
        return {
          type: 'single',
          options: {
            password: config.password,
            host: config.host,
            port: config.port
          }
        }
      },
    }),

    AuthModule,
    UserModule,
    RoleModule,
    ComponentModule,
    MusicModule,
    PerfumeModule,
    ProductModule,
    ProviderModule,
    CollectionModule,
    NewsModule
  ]
})
export class AppModule { }
