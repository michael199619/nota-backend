import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserPublisherModule.register(),
    ],
    controllers: [AuthController]
})
export class AuthModule { }
