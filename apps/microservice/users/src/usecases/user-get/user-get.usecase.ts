import { ControllerResponse, IUserController, IUserGet, Usecase, UserGetResponse } from "@perfume-platform/common";

export class UserGetUsecase extends Usecase<IUserController['userGet']> {
    handler(dto: IUserGet): ControllerResponse<UserGetResponse> {
        return {
            status: 'success',
            // data: {
            //     id: dto.id,
            //     name: 'Test User',
            //     email: 'test@example.com',
            //     createdAt: new Date().toISOString()
            // }
        }
    }
}