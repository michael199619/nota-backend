import { Injectable, NotFoundException } from "@nestjs/common";
import { GetUserDto, GetUserResponse, IUserController, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class GetUserUsecase extends Usecase<IUserController['getUser']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: GetUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: GetUserDto): Promise<GetUserResponse> {
        const user = await this.userRepository.getUserById(dto.id);

        if (!user) {
            throw new NotFoundException('user is not exists')
        }

        return user;
    }
}
