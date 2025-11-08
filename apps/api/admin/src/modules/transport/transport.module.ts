import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { NewsTransportModule,OrderTransportModule,ProductsTransportModule,UsersTransportModule } from '@perfume-platform/common';
import { SERVICE_ID } from '../../constants';
import { kafkaConfig,natsConfig } from '../config/config';
import { ConfigurationModule } from '../config/config.module';

@Module({
    imports: [
        ConfigurationModule,
        UsersTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>,configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY,natsConfig.KEY]
        }),
        OrderTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>,configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY,natsConfig.KEY]
        }),
        ProductsTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>,configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY,natsConfig.KEY]
        }),
        NewsTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>,configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY,natsConfig.KEY]
        }),
    ],
})
export class TransportModule { }
