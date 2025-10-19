import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { redisConfig } from './modules/config/config';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AddSalaryUserModule } from './usecases/add-salary-user/add-salary-user.module';
import { ChangePasswordUserModule } from './usecases/change-password-user/change-password-user.module';
import { ChangeRoleUserModule } from './usecases/change-role-user/change-role-user.module';
import { CreateUserModule } from './usecases/create-user/create-user.module';
import { EditUserModule } from './usecases/edit-user/edit-user.module';
import { GetAllUsersModule } from './usecases/get-all-users/get-all-users.module';
import { GetRolesModule } from './usecases/get-roles/get-roles.module';
import { GetSalaryUserModule } from './usecases/get-salary-user/get-salary-user.module';
import { GetSalaryUsersModule } from './usecases/get-salary-users/get-salary-users.module';
import { GetUserModule } from './usecases/get-user/get-user.module';
import { LoginUserModule } from './usecases/login-user/login-user.module';
import { LogoutUserModule } from './usecases/logout-user/logout-user.module';
import { RefreshTokenUserModule } from './usecases/refresh-token-user/refresh-token-user.module';
import { RemoveSalaryUserModule } from './usecases/remove-salary-user/remove-salary-user.module';
import { RemoveUserModule } from './usecases/remove-user/remove-user.module';
@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    TransportModule,
    RedisModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [redisConfig.KEY],
      useFactory(config: ConfigType<typeof redisConfig>) {
        return {
          type: 'single',
          options: {
            password: config.password,
            host: config.host,
            port: config.port
          }
        }
      },
    }),

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
    GetUserModule,
    LoginUserModule,
    LogoutUserModule,
    RefreshTokenUserModule,
    ChangePasswordUserModule
  ],
  controllers: [AppController],
})
export class AppModule { }
