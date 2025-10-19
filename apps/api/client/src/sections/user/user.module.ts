import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { UserController } from './user.controller';

@Module({
    imports: [
        UserPublisherModule.register()
    ],
    controllers: [UserController]
})
export class UserModule { }
