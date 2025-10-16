import { Module } from '@nestjs/common';
import { UsersPublisherModule } from '@perfume-platform/common';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UsersPublisherModule.register(),
    ],
    controllers: [AuthController]
})
export class AuthModule { }
