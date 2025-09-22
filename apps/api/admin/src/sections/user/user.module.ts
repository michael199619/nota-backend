import { Module } from '@nestjs/common';
import { OrderPublisherModule, UsersPublisherModule } from '@perfume-platform/common';
import { UserController } from './user.controller';

@Module({
    imports: [
        UsersPublisherModule.register(),
        OrderPublisherModule.register()
    ],
    controllers: [UserController]
})
export class UserModule { }
