import { Module } from '@nestjs/common';
import { TransportModule } from './modules/transport/transport.module';
import { RoleModule } from './sections/role/role.module';
import { UserModule } from './sections/user/user.module';

@Module({
  imports: [
    TransportModule,
    UserModule,
    RoleModule
  ]
})
export class AppModule { }
