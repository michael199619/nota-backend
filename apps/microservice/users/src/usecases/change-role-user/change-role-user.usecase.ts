import { Injectable, NotFoundException } from "@nestjs/common";
import { ChangeRoleUserDto, ChangeRoleUserResponse, IUserController, Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class ChangeRoleUserUsecase extends Usecase<IUserController['changeRoleUser']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: ChangeRoleUserDto) {
        return super.excecute(dto)
    }

    protected async handler(dto: ChangeRoleUserDto): Promise<ChangeRoleUserResponse> {
        if (!await this.userRepository.getUserById(dto.id)) {
            throw new NotFoundException('user is not esists')
        }

        return await this.userRepository.changeRoleUser(dto);
    }
}