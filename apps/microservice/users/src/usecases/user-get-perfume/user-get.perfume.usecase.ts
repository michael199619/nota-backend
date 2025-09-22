import { ControllerResponse, IUserController, IUserGetPerfume, Usecase, userGetPerfumeResponse } from "@perfume-platform/common";

export class UserGetPerfumeUsecase extends Usecase<IUserController['userGetPerfume']> {
    handler(dto: IUserGetPerfume): ControllerResponse<userGetPerfumeResponse> {
        return {
            status: 'success',
            // data: {
            //     id: dto.id,
            //     perfumes: [
            //         {
            //             id: '1',
            //             name: 'Chanel No. 5',
            //             brand: 'Chanel',
            //             price: 120
            //         }
            //     ]
            // }
        }
    }
}