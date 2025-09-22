import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TRASPORT_ORDER_GROUP } from '@perfume-platform/common';
import { AppModule } from './app.module';
import { SERVICE_ID } from './constants';
import { appConfig, kafkaConfig, natsConfig } from './modules/config/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configApp = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);
    const configKafka = app.get<ConfigType<typeof kafkaConfig>>(kafkaConfig.KEY);
    const configNats = app.get<ConfigType<typeof natsConfig>>(natsConfig.KEY);

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: SERVICE_ID,
                brokers: configKafka.brokers,
            },
            consumer: {
                groupId: TRASPORT_ORDER_GROUP,
            },
        },
    });

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.NATS,
        options: {
            name: SERVICE_ID,
            subject: TRASPORT_ORDER_GROUP,
            servers: configNats.servers
        },
    });

    await app.startAllMicroservices();

    console.log(`Orders microservice is running`);
}
bootstrap();