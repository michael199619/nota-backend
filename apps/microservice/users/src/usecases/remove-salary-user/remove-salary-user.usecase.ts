import { Injectable } from "@nestjs/common";
import { IUserController, RemoveSalaryUserDto, RemoveSalaryUserResponse, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";
import { GetSalaryUserUsecase } from "../get-salary-user/get-salary-user.usecase";

@Injectable()
export class RemoveSalaryUserUsecase extends Usecase<IUserController['removeSalaryUser']> {
    constructor(
        private readonly userRepository: UsersRepository,
        private readonly getSalaryUserUsecase: GetSalaryUserUsecase
    ) {
        super()
    }

    public excecute(dto: RemoveSalaryUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: RemoveSalaryUserDto): Promise<RemoveSalaryUserResponse> {
        await this.userRepository.removeSalaryUser(dto);

        return await this.getSalaryUserUsecase.handler({ id: dto.userId });
    }
}
