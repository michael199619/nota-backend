import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, jwtConfig, kafkaConfig, natsConfig, redisConfig } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            load: [appConfig, redisConfig, kafkaConfig, natsConfig, jwtConfig],
        }),
    ],
})
export class ConfigurationModule { }
