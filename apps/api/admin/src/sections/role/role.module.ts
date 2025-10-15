import { Module } from '@nestjs/common';
import { UsersPublisherModule } from '@perfume-platform/common';
import { RoleController } from './role.controller';

@Module({
    imports: [
        UsersPublisherModule.register(),
    ],
    controllers: [RoleController]
})
export class RoleModule { }
