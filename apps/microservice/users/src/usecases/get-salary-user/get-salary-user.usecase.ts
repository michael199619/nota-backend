import { Injectable, NotFoundException } from "@nestjs/common";
import { GetSalaryUserDto, GetSalaryUserResponse, IUserController, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class GetSalaryUserUsecase extends Usecase<IUserController['getSalaryUser']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: GetSalaryUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: GetSalaryUserDto): Promise<GetSalaryUserResponse> {
        const user = await this.userRepository.getSalaryUserById(dto.id);

        if (!user) {
            throw new NotFoundException('user is not exists')
        }

        return user;
    }
}
