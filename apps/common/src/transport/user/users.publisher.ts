import { ClientKafka, ClientNats } from "@nestjs/microservices";
import { userTopics, UserTopics } from "./constants";
import { IUserGet, UserGetResponse } from "./dtos";
import { IUserGetPerfume, userGetPerfumeResponse } from "./dtos/create";
import { IUserController } from "./user.interface";

export class UsersPublisher implements IUserController {
    constructor(
        private kafkaService: ClientKafka,
        private natsService: ClientNats
    ) {
    }

    private async onApplicationBootstrap() {
        userTopics.forEach(pattern => this.kafkaService.subscribeToResponseOf(pattern))
        await this.kafkaService.connect()
    }

    userGet(userData: IUserGet) {
        return this.natsService.send<UserGetResponse>(UserTopics.USER_GET, userData);
    }

    userGetPerfume(userData: IUserGetPerfume) {
        return this.kafkaService.send<userGetPerfumeResponse>(UserTopics.USER_GET_PERFUME, userData);
    }
}