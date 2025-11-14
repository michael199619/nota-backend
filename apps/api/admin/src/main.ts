import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { ExFilter } from '@perfume-platform/common';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { SERVICE_ID } from './constants';

async function bootstrap() {
  const app=await NestFactory.create(AppModule);

  app.useGlobalFilters(new ExFilter());
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    credentials: true,
    methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
  })

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: false,
  }));

  const config=new DocumentBuilder()
    .setTitle(SERVICE_ID)
    .setDescription('Api for admin')
    .setVersion('1.0')
    .build();
  const documentFactory=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,documentFactory);

  await app.listen(2004,() => {
    console.log(`API Client is running on port http://localhost:${2004}/api`);
  });
}
bootstrap();
