import { BadRequestException,Injectable } from "@nestjs/common";
import { CreateUserDto,CreateUserResponse,IUserController,PasswordHasher,SearchPrisma,Usecase } from "@perfume-platform/common";
import { User } from "../../db/prisma.service";
import { RolesRepository } from "../../db/roles/roles.repository";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class CreateUserUsecase extends Usecase<IUserController['createUser']> {
    constructor(
        private readonly userRepository: UsersRepository,
        private readonly roleRepository: RolesRepository
    ) {
        super()
    }

    public excecute(dto: CreateUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: CreateUserDto): Promise<CreateUserResponse> {
        return await this.userRepository.transaction(undefined, async (tx) => {
            const search: SearchPrisma<User, keyof User>[] = [
                {key: 'phone', value: dto.phone} , 
                {key: 'email', value: dto.email},
                {key: 'login', value: dto.login}, 
            ]

            const user = await this.userRepository.getUserByLoginOrEmailOrPhone(search, undefined, tx)

            if (user) {
                const same: string = search.filter(e => user[e.key] === e.value)
                  .reduce<string>((prev, next) => (prev ? prev + ', '  : '') + next.key, '');

                throw new BadRequestException(`Key '${same}' have to unique`);          
            }

            if (!await this.roleRepository.getRoleById(dto.roleId, tx)) {
                throw new BadRequestException('Role is not esists')
            }

            return await this.userRepository.createUser({
                ...dto,
                password: await PasswordHasher.getHashPassword(dto.password)
            }, tx);
        }) 
    }
}
