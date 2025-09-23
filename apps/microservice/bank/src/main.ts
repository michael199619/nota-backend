import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TRASPORT_ORDER_GROUP } from '@perfume-platform/common';
import { AppModule } from './app.module';
import { SERVICE_ID } from './constants';
import { kafkaConfig, natsConfig } from './modules/config/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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

    console.log(`Buyers microservice is running`);
}
bootstrap();