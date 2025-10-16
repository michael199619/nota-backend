import { Injectable } from "@nestjs/common";
import { CreateUserDto, CreateUserResponse, IUserController, PasswordHasher, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class CreateUserUsecase extends Usecase<IUserController['createUser']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: CreateUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: CreateUserDto): Promise<CreateUserResponse> {
        return await this.userRepository.createUser({
            ...dto,
            password: await PasswordHasher.getHashPassword(dto.password)
        });
    }
}
