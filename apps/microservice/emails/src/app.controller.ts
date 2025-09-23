import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor() { }

    @MessagePattern('email.send')
    async handleEmailSend(@Payload() data: any) {
        console.log('Received email.send message:', data);
        return {
            status: 'success',
            message: 'Email sent successfully',
            data: {
                messageId: Math.floor(Math.random() * 1000000),
                ...data,
                sentAt: new Date().toISOString(),
                status: 'sent'
            }
        };
    }

    @MessagePattern('email.template.updated')
    async handleEmailTemplateUpdated(@Payload() data: any) {
        console.log('Received email.template.updated message:', data);
        return {
            status: 'success',
            message: 'Email template updated successfully',
            data: {
                ...data,
                updatedAt: new Date().toISOString()
            }
        };
    }
}
