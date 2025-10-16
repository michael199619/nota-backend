import { Injectable } from "@nestjs/common";
import { IUserController, LoginUserDto, LoginUserResponse, Usecase } from "@perfume-platform/common";
import { AuthService } from "../../modules/auth/auth.service";

@Injectable()
export class LoginUserUsecase extends Usecase<IUserController['loginUser']> {
    constructor(
        private readonly authService: AuthService
    ) {
        super()
    }

    public excecute(dto: LoginUserDto) {
        return super.excecute(dto)
    }

    async handler(dto: LoginUserDto): Promise<LoginUserResponse> {
        return await this.authService.login(dto.login, dto.password)
    }
}
