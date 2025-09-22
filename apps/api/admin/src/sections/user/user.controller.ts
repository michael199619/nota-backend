import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderPublisher, UsersPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('buyer')
@Controller()
export class UserController {
    constructor(
        private readonly usersPublisher: UsersPublisher,
        private readonly orderPublisher: OrderPublisher
    ) { }

    @Get(':id')
    async userGet(
        @Param('id') id: string
    ) {
        console.log(await firstValueFrom(this.orderPublisher.orderCreate({
            userId: 'string',
            productId: 'string',
            quantity: 3,
            total: 3
        })))
        return this.usersPublisher.userGet({ id });


    }
} 