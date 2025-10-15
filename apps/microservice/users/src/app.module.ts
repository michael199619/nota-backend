import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AddSalaryUserModule } from './usecases/add-salary-user/add-salary-user.module';
import { ChangeRoleUserModule } from './usecases/change-role-user/change-role-user.module';
import { CreateUserModule } from './usecases/create-user/create-user.module';
import { EditUserModule } from './usecases/edit-user/edit-user.module';
import { GetAllUsersModule } from './usecases/get-all-users/get-all-users.module';
import { GetRolesModule } from './usecases/get-roles/get-roles.module';
import { GetSalaryUserModule } from './usecases/get-salary-user/get-salary-user.module';
import { GetSalaryUsersModule } from './usecases/get-salary-users/get-salary-users.module';
import { GetUserModule } from './usecases/get-user/get-user.module';
import { RemoveSalaryUserModule } from './usecases/remove-salary-user/remove-salary-user.module';
import { RemoveUserModule } from './usecases/remove-user/remove-user.module';

@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    TransportModule,

    AddSalaryUserModule,
    ChangeRoleUserModule,
    CreateUserModule,
    EditUserModule,
    RemoveUserModule,
    RemoveSalaryUserModule,
    GetAllUsersModule,
    GetRolesModule,
    GetSalaryUserModule,
    GetSalaryUsersModule,
    GetUserModule
  ],
  controllers: [AppController],
})
export class AppModule { }
