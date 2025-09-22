import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { OrderCreateModule } from './usecases/order-create/order-create.module';

@Module({
    imports: [
        ConfigurationModule,
        PrismaModule,
        TransportModule,
        OrderCreateModule,
    ],
    controllers: [AppController],
})
export class AppModule { }


