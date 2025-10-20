import { Module } from '@nestjs/common';
import { OrderPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { UserController } from './user.controller';

@Module({
    imports: [
        AuthUserModule,
        UserPublisherModule.register(),
        OrderPublisherModule.register()
    ],
    controllers: [UserController]
})
export class UserModule { }
