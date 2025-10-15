import { Injectable } from "@nestjs/common";
import { GetSalaryUsersDto, GetSalaryUsersResponse, IUserController, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class GetSalaryUsersUsecase extends Usecase<IUserController['getSalaryUsers']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: GetSalaryUsersDto) {
        return super.excecute(dto)
    }

    async handler(dto: GetSalaryUsersDto): Promise<GetSalaryUsersResponse> {
        return await this.userRepository.getSalaryUsers(dto);
    }
}
