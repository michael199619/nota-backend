import { ClientKafka, ClientNats } from "@nestjs/microservices";
import { orderTopics, OrderTopics } from "./constants";
import { IOrderCreate, OrderCreateResponse } from "./dtos/create";
import { IOrderController } from "./order.interface";

export class OrderPublisher implements IOrderController {
    constructor(
        private kafkaService: ClientKafka,
        private natsService: ClientNats
    ) {
    }

    private async onApplicationBootstrap() {
        orderTopics.forEach(pattern => this.kafkaService.subscribeToResponseOf(pattern))
        await this.kafkaService.connect()
    }

    orderCreate(dto: IOrderCreate) {
        return this.natsService.send<OrderCreateResponse>(OrderTopics.ORDER_CREATE, dto);
    }
}