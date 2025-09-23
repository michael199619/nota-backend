import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // Обработка сообщений из Kafka (request-response)
    @MessagePattern('file.uploaded')
    async handleFileUploaded(@Payload() data: any) {
        console.log('Received file.uploaded message:', data);
        return {
            status: 'success',
            message: 'File uploaded successfully',
            data: {
                fileId: Math.floor(Math.random() * 1000000),
                ...data,
                uploadedAt: new Date().toISOString(),
                status: 'uploaded'
            }
        };
    }

    @MessagePattern('file.deleted')
    async handleFileDeleted(@Payload() data: any) {
        console.log('Received file.deleted message:', data);
        return {
            status: 'success',
            message: 'File deleted successfully',
            data: {
                ...data,
                deletedAt: new Date().toISOString(),
                status: 'deleted'
            }
        };
    }

    // Обработка событий из Kafka (fire-and-forget)
    @EventPattern('file.processed')
    async handleFileProcessed(@Payload() data: any) {
        console.log('Received file.processed event:', data);
        // Здесь можно добавить логику обработки обработки файла
    }

    @EventPattern('file.virus.detected')
    async handleFileVirusDetected(@Payload() data: any) {
        console.log('Received file.virus.detected event:', data);
        // Здесь можно добавить логику обработки обнаружения вируса
    }
}
