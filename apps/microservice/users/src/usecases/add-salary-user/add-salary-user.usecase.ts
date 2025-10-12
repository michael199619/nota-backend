import { Injectable, NotFoundException } from "@nestjs/common";
import { AddSalaryUserDto, AddSalaryUserResponse, IUserController, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class AddSalaryUserUsecase extends Usecase<IUserController['addSalaryUser']> {
    constructor(
        private readonly userResponse: UsersRepository
    ) {
        super()
    }

    public excecute(dto: AddSalaryUserDto) {
        return super.excecute(dto)
    }

    protected async handler(dto: AddSalaryUserDto): Promise<AddSalaryUserResponse> {
        if (!await this.userResponse.getUserById(dto.id)) {
            throw new NotFoundException('user is not esists')
        }

        return await this.userResponse.addSalaryUser(dto);
    }
}