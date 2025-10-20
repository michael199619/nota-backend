import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { RoleController } from './role.controller';

@Module({
    imports: [
        AuthUserModule,
        UserPublisherModule.register(),
    ],
    controllers: [RoleController]
})
export class RoleModule { }
