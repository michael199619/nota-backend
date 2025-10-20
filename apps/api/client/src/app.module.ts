import { Module } from '@nestjs/common';
import { ContextModule } from '@perfume-platform/common/context/context.module';
import { TransportModule } from './modules/transport/transport.module';
import { UserModule } from './sections/user/user.module';

@Module({
  imports: [
    TransportModule,
    ContextModule,
    UserModule
  ],
})
export class AppModule { }
