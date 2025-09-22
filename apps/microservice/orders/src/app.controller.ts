import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IOrderController, IOrderCreate, OrderTopics } from '@perfume-platform/common';
import { OrderCreateUsecase } from './usecases/order-create/order-create.usecase';

@Controller()
export class AppController implements IOrderController {
    constructor(
        private readonly orderCreateUsecase: OrderCreateUsecase
    ) { }

    @MessagePattern(OrderTopics.ORDER_CREATE)
    orderCreate(@Payload() data: IOrderCreate) {
        return this.orderCreateUsecase.excecute(data);
    }
}
