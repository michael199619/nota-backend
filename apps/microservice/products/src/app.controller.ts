import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IProductCreate, ProductCreateUsecase } from './usecases/product-create/product-create.usecase';
import { IProductGet, ProductGetUsecase } from './usecases/product-get/product-get.usecase';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly productCreateUsecase: ProductCreateUsecase,
        private readonly productGetUsecase: ProductGetUsecase
    ) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // Обработка сообщений из Kafka (request-response)
    @MessagePattern('product.created')
    async handleProductCreated(@Payload() data: IProductCreate) {
        console.log('Received product.created message:', data);
        return this.productCreateUsecase.excecute(data);
    }

    @MessagePattern('product.get')
    async handleProductGet(@Payload() data: IProductGet) {
        console.log('Received product.get message:', data);
        return this.productGetUsecase.excecute(data);
    }

    // Обработка событий из Kafka (fire-and-forget)
    @EventPattern('product.deleted')
    async handleProductDeleted(@Payload() data: any) {
        console.log('Received product.deleted event:', data);
        // Здесь можно добавить логику обработки удаления продукта
    }

    @EventPattern('product.stock.updated')
    async handleProductStockUpdated(@Payload() data: any) {
        console.log('Received product.stock.updated event:', data);
        // Здесь можно добавить логику обработки обновления остатков
    }
}
