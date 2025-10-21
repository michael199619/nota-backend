import { ForbiddenException,Injectable } from "@nestjs/common";
import { AuthService,IUserController,LoginUserDto,LoginUserResponse,SearchPrisma,Usecase } from "@perfume-platform/common";
import { User } from "../../db/prisma.service";
import { UsersRepository } from "../../db/users/users.repository";

@Injectable()
export class LoginUserUsecase extends Usecase<IUserController['loginUser']> {
    constructor(
        private readonly authService: AuthService,
        private readonly usersRepository: UsersRepository
    ) {
        super()
    }

    public excecute(dto: LoginUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: LoginUserDto): Promise<LoginUserResponse> {
        const search: SearchPrisma<User, keyof User>[] = [
            {key: 'phone', value: dto.login} , 
            {key: 'email', value: dto.login},
            {key: 'login', value: dto.login}, 
        ]

        const user = await this.usersRepository.getUserByLoginOrEmailOrPhone(search);

        if (!user) {
            throw new ForbiddenException();
        }

        return await this.authService.login(user.id, dto.password, user.password)
    }
}
