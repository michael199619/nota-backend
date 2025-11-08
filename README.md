![Image alt](https://github.com/michael199619/nota-frontend/raw/main/assets/main.png)

# Gallery-nota

Микросервисная архитектура для платформы парфюмерии

## Структура проекта
Микросервисы общаются через HTTP/gRPC (nats/kafka)
```
apps/
├── api
   ├── client/      # :3000 - API для покупателей
   ├── admin/       # :3001 - API для админов  
├── microservices
   ├── micro-users/     - Управление пользователями
   ├── micro-products/  - Каталог парфюмерии
   ├── micro-orders/    - Заказы
   ├── micro-bank/      - Платежи
   ├── micro-news/      - Новости
   ├── micro-buyers/    - Покупатели
   ├── micro-emails/    - Уведомления
   ├── micro-storage/   - Файлы
└── common/             - Общее
```
## База
Базы имеют только микросервисы
![Image alt](https://github.com/michael199619/nota-backend/raw/main/assets/database.svg)
https://www.drawdb.app/editor?shareId=d6b6de62da3bc579e4266f794cc99804

# Разработка (жесткая связь)
Точки входа являются apps/api/* и в апи не должно быть логики, вся логика в микросах /apps/microservises/* 
Ручки апи транспортируются в свой микросервис. При этом контроллеры апи имплементируют дто микроса со сваггером, что находятся по apps/common/src/transport/{микросервис}/dtos/* Чтобы обеспечить консистентность контрактов, должны были написаны интерфейсы с валидацией паблишера и контроллера для сервиса, паблишер является частью модуля, который импортируется
## Пример
### api/microservice
transport.module
```js
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { UsersTransportModule } from '@perfume-platform/common';
import { SERVICE_ID } from '../../constants';
import { kafkaConfig, natsConfig } from '../config/config';
import { ConfigurationModule } from '../config/config.module';

@Module({
    imports: [
        ConfigurationModule,
        UsersTransportModule.register({
            useFactory: (configKafa: ConfigType<typeof kafkaConfig>, configNats: ConfigType<typeof natsConfig>) => ({
                kafkaBrokers: configKafa.brokers,
                natsServers: configNats.servers,
                clientId: SERVICE_ID

            }),
            inject: [kafkaConfig.KEY, natsConfig.KEY]
        }),
    ],
    exports: [ClientsModule],
})
export class TransportModule { }
```
controller
```js
@ApiTags('buyer')
@Controller()
export class AppController {
    constructor(
        private readonly userPublisher: UserPublisher
    ) { }

    @Get(':id')
    async userGet(
        @Param('id') id: string
    ) {
        return this.userPublisher.userGet({ id })
    }
} 
```
### common
UserPublisher
```js
import { ClientKafka, ClientNats } from "@nestjs/microservices";
import { userTopics, UserTopics } from "./constants";
import { IUserGet, UserGetResponse } from "./dtos";
import { IUserGetPerfume, userGetPerfumeResponse } from "./dtos/create";
import { IUserController } from "./user.interface";

export class UserPublisher implements IUserController {
    constructor(
        public kafkaService: ClientKafka,
        public natsService: ClientNats
    ) {
    }

    async onApplicationBootstrap() {
        userTopics.forEach(pattern => this.kafkaService.subscribeToResponseOf(pattern))
        await this.kafkaService.connect()
    }

    userGet(userData: IUserGet) {
        return this.natsService.send<UserGetResponse>(UserTopics.USER_GET, userData);
    }
}
```
IUserController
```js
import { ControllerResponse } from "../../utils";
import { IUserGet, UserGetResponse } from "./dtos";

export interface ITransportOptions {
    clientId: string;
    kafkaBrokers: string[];
    natsServers: string[];
}

export type IUserController = {
    userGet: (dto: IUserGet) => ControllerResponse<UserGetResponse>
}
```
UsersTransportModule - динамический модуль, который нужен для инициализации каждого транспорта для сервиса, здесь так же прописывается UserPublisherModule
```js
import { DynamicModule, Global, Module } from '@nestjs/common';
import { ClientKafka, ClientNats, ClientsModule, Transport } from '@nestjs/microservices';
import { TRANSPORT_USER_KAFKA, TRANSPORT_USER_NATS, TRASPORT_USER_GROUP } from './constants';
import { ITransportOptions } from './user.interface';
import { UserPublisher } from './users.publisher';

@Global()
@Module({})
export class UsersTransportModule {
  static register(
    { useFactory, inject }: { useFactory: (...injects: any) => ITransportOptions, inject: any[] }
  ): DynamicModule {
    return {
      module: UsersTransportModule,

      imports: [
        ClientsModule.registerAsync([
          {
            name: TRANSPORT_USER_KAFKA,
            useFactory: async (...injects) => {
              const { clientId, kafkaBrokers } = await useFactory(...injects);

              return {
                transport: Transport.KAFKA,
                options: {
                  client: {
                    clientId,
                    brokers: kafkaBrokers
                  },
                  consumer: {
                    groupId: TRASPORT_USER_GROUP
                  }
                }
              }
            },
            inject
          },
          {
            name: TRANSPORT_USER_NATS,
            useFactory: async (...injects) => {
              const { clientId, natsServers } = await useFactory(...injects);

              return {
                transport: Transport.NATS,
                options: {
                  servers: natsServers,
                  name: clientId,
                  subject: TRASPORT_USER_GROUP
                }
              }
            },
            inject
          },
        ]),
      ],
      exports: [ClientsModule],
    }
  }
}

@Module({})
export class UserPublisherModule {
  static register(): DynamicModule {

    return {
      module: UserPublisherModule,

      providers: [
        {
          provide: UserPublisher,
          useFactory: async (kafkaService: ClientKafka, natsService: ClientNats) => {
            return new UserPublisher(kafkaService, natsService)
          },
          inject: [TRANSPORT_USER_KAFKA, TRANSPORT_USER_NATS]
        },
      ],
      exports: [UserPublisher],
    };
  }
}
``` 
### microservice
contoller
```js
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IUserController, IUserGet, UserTopics } from '@perfume-platform/common';

@Controller()
export class AppController implements IUserController {
  constructor(
  ) { }

  @MessagePattern(UserTopics.USER_GET)
  async userGet(@Payload() data: IUserGet) {
    return {
      status: 'success',
      data
    };
  }
} 
```
usecase
```js
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IUserController, IUserGet, IUserGetPerfume, UserTopics } from '@perfume-platform/common';
import { Topics } from 'apps/common/dist/transport/user/topics.enum';
import { UserGetUsecase } from './usecases/user-get/user-get.usecase';

@Controller()
export class AppController implements IUserController {
  constructor(
    private readonly userGetUsecase: UserGetUsecase
  ) { }

  @MessagePattern(UserTopics.USER_GET)
  userGet(@Payload() data: IUserGet) {
    return this.userGetUsecase.excecute(data)
  }
} 
```
UserGetUsecase
```js
import { ControllerResponse, IUserController, IUserGet, Usecase, UserGetResponse } from "@perfume-platform/common";

export class UserGetUsecase extends Usecase<IUserController['userGet']> {
    handler(dto: IUserGet): ControllerResponse<UserGetResponse> {
        return {
            status: ''
        }
    }
}
```
при какой либо ошибки в несоответствии в контратах - сборка не сбилдится, а в рантайме будет ошибка

### 1. Установка зависимостей
```bash
npm install
```

### 2. Сборка общих модулей
```bash
npm run build:common
```

### 3. Запуск всех сервисов в режиме разработки
```bash
npm run start:dev:all
```

### 4. Запуск отдельных сервисов
```bash
# апи для клиентов
npm run start:dev:api-client

# апи для админов
npm run start:dev:api-admin

# микросервис пользователей
npm run start:dev:micro-users
```