import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { UserGetPerfumeModule } from './usecases/user-get-perfume/user-get-perfume.module';
import { UserGetModule } from './usecases/user-get/user-get.module';

@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    TransportModule,
    UserGetPerfumeModule,
    UserGetModule
  ],
  controllers: [AppController],
})
export class AppModule { }
