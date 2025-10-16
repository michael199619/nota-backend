import { Module } from '@nestjs/common';
import { TransportModule } from './modules/transport/transport.module';
import { AuthModule } from './sections/auth/auth.module';
import { RoleModule } from './sections/role/role.module';
import { UserModule } from './sections/user/user.module';

@Module({
  imports: [
    TransportModule,
    AuthModule,
    UserModule,
    RoleModule,
  ]
})
export class AppModule { }
