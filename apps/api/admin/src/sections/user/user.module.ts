import { Module } from '@nestjs/common';
import { OrderPublisherModule, UserPublisherModule } from '@perfume-platform/common';
import { UserController } from './user.controller';

@Module({
    imports: [
        UserPublisherModule.register(),
        OrderPublisherModule.register()
    ],
    controllers: [UserController]
})
export class UserModule { }
