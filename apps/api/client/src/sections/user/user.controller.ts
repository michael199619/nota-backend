import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserPublisher } from '@perfume-platform/common';

@ApiTags('users')
@Controller()
export class UserController {
    constructor(
        private readonly userPublisher: UserPublisher
    ) {

    }

    @Get('users/:id/perfume')
    async userGetPerfume(
        @Param('id') id: string
    ) {
        return this.userPublisher.userGetPerfume({ id })
    }
} 