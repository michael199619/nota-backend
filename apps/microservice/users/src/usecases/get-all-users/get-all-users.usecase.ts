import { Injectable } from "@nestjs/common";
import { GetAllUsersDto,GetAllUsersResponse,IUserController,Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class GetAllUsersUsecase extends Usecase<IUserController['getAllUsers']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: GetAllUsersDto) {
        return super.excecute(dto);
    }

    async handler(dto: GetAllUsersDto): Promise<GetAllUsersResponse> {
        return await this.userRepository.getUsers(dto);
    }
}
