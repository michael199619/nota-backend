import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OrderTransportModule } from '@perfume-platform/common';
import { SERVICE_ID } from '../../constants';
import { kafkaConfig, natsConfig } from '../config/config';
import { ConfigurationModule } from '../config/config.module';

@Module({
    imports: [
        ConfigurationModule,
        OrderTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>, configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY, natsConfig.KEY]
        }),
    ],
})
export class TransportModule { }
