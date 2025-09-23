import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor() { }

    @MessagePattern('payment.processed')
    async handlePaymentProcessed(@Payload() data: any) {
        console.log('Received payment.processed message:', data);
        return {
            status: 'success',
            message: 'Payment processed successfully',
            data: {
                transactionId: Math.floor(Math.random() * 1000000),
                ...data,
                processedAt: new Date().toISOString(),
                status: 'completed'
            }
        };
    }

    @MessagePattern('payment.failed')
    async handlePaymentFailed(@Payload() data: any) {
        console.log('Received payment.failed message:', data);
        return {
            status: 'error',
            message: 'Payment failed',
            data: {
                ...data,
                failedAt: new Date().toISOString(),
                status: 'failed'
            }
        };
    }
}
