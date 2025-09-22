import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersPublisher } from '@perfume-platform/common';

@ApiTags('users')
@Controller()
export class UserController {
    constructor(
        private readonly usersPublisher: UsersPublisher
    ) {

    }

    @Get('users/:id/perfume')
    async userGetPerfume(
        @Param('id') id: string
    ) {
        return this.usersPublisher.userGetPerfume({ id })
    }
} 