import { Module } from '@nestjs/common';
import { UserPublisherModule } from '@perfume-platform/common';
import { RoleController } from './role.controller';

@Module({
    imports: [
        UserPublisherModule.register(),
    ],
    controllers: [RoleController]
})
export class RoleModule { }
