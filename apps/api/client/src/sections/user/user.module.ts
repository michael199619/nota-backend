import { Module } from '@nestjs/common';
import { UsersPublisherModule } from '@perfume-platform/common';
import { UserController } from './user.controller';

@Module({
    imports: [
        UsersPublisherModule.register()
    ],
    controllers: [UserController]
})
export class UserModule { }
