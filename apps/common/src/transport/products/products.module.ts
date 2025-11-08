import { DynamicModule,Global,Module } from '@nestjs/common';
import { ClientKafka,ClientNats,ClientsModule,Transport } from '@nestjs/microservices';
import { TRANSPORT_PRODUCTS_KAFKA,TRANSPORTS_PRODUCT_NATS,TRASPORT_PRODUCTS_GROUP } from './constants';
import { IProductsTransportOptions } from './products.interface';
import { ProductsPublisher } from './products.publisher';

@Global()
@Module({})
export class ProductsTransportModule {
  static register(
    { useFactory,inject }: { useFactory: (...injects: any) => IProductsTransportOptions,inject: any[] }
  ): DynamicModule {
    return {
      module: ProductsTransportModule,

      imports: [
        ClientsModule.registerAsync([
          {
            name: TRANSPORT_PRODUCTS_KAFKA,
            useFactory: async (...injects) => {
              const { clientId,kafkaBrokers }=await useFactory(...injects);

              return {
                transport: Transport.KAFKA,
                options: {
                  client: {
                    clientId,
                    brokers: kafkaBrokers
                  },
                  consumer: {
                    groupId: TRASPORT_PRODUCTS_GROUP
                  }
                }
              }
            },
            inject
          },
          {
            name: TRANSPORTS_PRODUCT_NATS,
            useFactory: async (...injects) => {
              const { clientId,natsServers }=await useFactory(...injects);

              return {
                transport: Transport.NATS,
                options: {
                  servers: natsServers,
                  name: clientId,
                  subject: TRASPORT_PRODUCTS_GROUP
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
export class ProductsPublisherModule {
  static register(): DynamicModule {

    return {
      module: ProductsPublisherModule,

      providers: [
        {
          provide: ProductsPublisher,
          useFactory: async (kafkaService: ClientKafka,natsService: ClientNats) => {
            return new ProductsPublisher(kafkaService,natsService)
          },
          inject: [TRANSPORT_PRODUCTS_KAFKA,TRANSPORTS_PRODUCT_NATS]
        },
      ],
      exports: [ProductsPublisher],
    };
  }
}