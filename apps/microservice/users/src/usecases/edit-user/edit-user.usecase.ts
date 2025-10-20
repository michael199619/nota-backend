import { BadRequestException,Injectable,NotFoundException } from "@nestjs/common";
import { EditUserDto,EditUserResponse,IUserController,Usecase } from "@perfume-platform/common";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class EditUserUsecase extends Usecase<IUserController['editUser']> {
    constructor(
        private readonly userRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: EditUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: EditUserDto): Promise<EditUserResponse> {
        return await this.userRepository.transaction(undefined, async (tx) => {
            if (!await this.userRepository.getUserById(dto.id, tx)) {
                throw new NotFoundException('user is not exists')
            }

            const user = await this.userRepository.getUserByLoginOrEmailOrPhone('', dto.phone, dto.email, dto.id, tx)

            if (user) {
                const same: string = [
                    {key: 'phone', value: dto.phone}, 
                    {key: 'email', value: dto.email}, 
                ].filter(e => user[e.key] === e.value)
                .reduce<string>((prev, next) => (prev ? prev + ', '  : '') + next.key, '');
                 throw new BadRequestException(`Key '${same}' have to unique`);          
            }

        return await this.userRepository.editUser(dto, tx);
    })
    }
}
