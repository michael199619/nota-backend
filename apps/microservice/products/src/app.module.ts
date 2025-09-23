import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { ProductCreateModule } from './usecases/product-create/product-create.module';
import { ProductGetModule } from './usecases/product-get/product-get.module';

@Module({
    imports: [
        ConfigurationModule,
        PrismaModule,
        ProductCreateModule,
        ProductGetModule
    ],
    controllers: [AppController],
})
export class AppModule { }


