import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    // @Get()
    // getHello(): string {
    //     return this.appService.getHello();
    // }

    // // Обработка сообщений из Kafka (request-response)
    // @MessagePattern('buyer.registered')
    // async handleBuyerRegistered(@Payload() data: any) {
    //     console.log('Received buyer.registered message:', data);
    //     return {
    //         status: 'success',
    //         message: 'Buyer registered successfully',
    //         data: {
    //             buyerId: Math.floor(Math.random() * 1000),
    //             ...data,
    //             registeredAt: new Date().toISOString(),
    //             status: 'registered'
    //         }
    //     };
    // }

    // @MessagePattern('buyer.verified')
    // async handleBuyerVerified(@Payload() data: any) {
    //     console.log('Received buyer.verified message:', data);
    //     return {
    //         status: 'success',
    //         message: 'Buyer verified successfully',
    //         data: {
    //             ...data,
    //             verifiedAt: new Date().toISOString(),
    //             status: 'verified'
    //         }
    //     };
    // }

    // // Обработка событий из Kafka (fire-and-forget)
    // @EventPattern('buyer.suspended')
    // async handleBuyerSuspended(@Payload() data: any) {
    //     console.log('Received buyer.suspended event:', data);
    //     // Здесь можно добавить логику обработки блокировки покупателя
    // }

    // @EventPattern('buyer.premium.upgraded')
    // async handleBuyerPremiumUpgraded(@Payload() data: any) {
    //     console.log('Received buyer.premium.upgraded event:', data);
    //     // Здесь можно добавить логику обработки апгрейда до премиум
    // }
}
