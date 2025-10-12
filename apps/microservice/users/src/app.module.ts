import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AddSalaryUserModule } from './usecases/add-salary-user/add-salary-user.module';
import { ChangeRoleUserModule } from './usecases/change-role-user/change-role-user.module';

@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    TransportModule,

    AddSalaryUserModule,
    ChangeRoleUserModule
  ],
  controllers: [AppController],
})
export class AppModule { }
