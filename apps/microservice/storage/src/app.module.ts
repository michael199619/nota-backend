import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';

@Module({
    imports: [ConfigurationModule, PrismaModule],
    controllers: [AppController],
})
export class AppModule { }


