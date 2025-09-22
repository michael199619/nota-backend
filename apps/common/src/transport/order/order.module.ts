import { DynamicModule, Global, Module } from '@nestjs/common';
import { ClientKafka, ClientNats, ClientsModule, Transport } from '@nestjs/microservices';
import { TRANSPORT_ORDER_KAFKA, TRANSPORT_ORDER_NATS, TRASPORT_ORDER_GROUP } from './constants';
import { IOrderTransportOptions } from './order.interface';
import { OrderPublisher } from './order.publisher';

@Global()
@Module({})
export class OrderTransportModule {
  static register(
    { useFactory, inject }: { useFactory: (...injects: any) => IOrderTransportOptions, inject: any[] }
  ): DynamicModule {
    return {
      module: OrderTransportModule,

      imports: [
        ClientsModule.registerAsync([
          {
            name: TRANSPORT_ORDER_KAFKA,
            useFactory: async (...injects) => {
              const { clientId, kafkaBrokers } = await useFactory(...injects);

              return {
                transport: Transport.KAFKA,
                options: {
                  client: {
                    clientId,
                    brokers: kafkaBrokers
                  },
                  consumer: {
                    groupId: TRASPORT_ORDER_GROUP
                  }
                }
              }
            },
            inject
          },
          {
            name: TRANSPORT_ORDER_NATS,
            useFactory: async (...injects) => {
              const { clientId, natsServers } = await useFactory(...injects);

              return {
                transport: Transport.NATS,
                options: {
                  servers: natsServers,
                  name: clientId,
                  subject: TRASPORT_ORDER_GROUP
                }
              }
            },
            inject
          },
        ]),
      ],
      exports: [ClientsModule],
    }
  }
}

@Module({})
export class OrderPublisherModule {
  static register(): DynamicModule {

    return {
      module: OrderPublisherModule,

      providers: [
        {
          provide: OrderPublisher,
          useFactory: async (kafkaService: ClientKafka, natsService: ClientNats) => {
            return new OrderPublisher(kafkaService, natsService)
          },
          inject: [TRANSPORT_ORDER_KAFKA, TRANSPORT_ORDER_NATS]
        },
      ],
      exports: [OrderPublisher],
    };
  }
}