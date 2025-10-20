import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ContextModule } from '@perfume-platform/common';
import { redisConfig } from './modules/config/config';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AuthModule } from './sections/auth/auth.module';
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
  ]
})
export class AppModule { }
