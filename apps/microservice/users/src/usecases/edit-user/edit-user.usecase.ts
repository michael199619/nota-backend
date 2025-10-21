import { BadRequestException,Injectable,NotFoundException } from "@nestjs/common";
import { EditUserDto,EditUserResponse,IUserController,SearchPrisma,Usecase } from "@perfume-platform/common";
import { User } from "../../db/prisma.service";
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

            const search: SearchPrisma<User, keyof User>[] = [
                {key: 'phone', value: dto.phone} as SearchPrisma<User, 'phone'>, 
                {key: 'email', value: dto.email} as SearchPrisma<User, 'email'>
             ]

            const user = await this.userRepository.getUserByLoginOrEmailOrPhone(search, dto.id, tx)

            if (user) {
                const same: string = search.filter(e => user[e.key] === e.value)
                  .reduce<string>((prev, next) => (prev ? prev + ', '  : '') + next.key, '');

                throw new BadRequestException(`Key '${same}' have to unique`);          
            }

        return await this.userRepository.editUser(dto, tx);
    })
    }
}
