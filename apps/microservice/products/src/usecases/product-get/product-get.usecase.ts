import { ControllerResponse, Usecase } from "@perfume-platform/common";

export interface IProductGet {
    id: string;
}

export interface ProductGetResponse {
    id: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    createdAt: string;
}

export class ProductGetUsecase extends Usecase<(dto: IProductGet) => ControllerResponse<ProductGetResponse>> {
    handler(dto: IProductGet): ControllerResponse<ProductGetResponse> {
        return {
            status: 'success',
            data: {
                id: dto.id,
                name: 'Chanel No. 5',
                price: 120,
                description: 'Classic French perfume',
                brand: 'Chanel',
                createdAt: new Date().toISOString()
            }
        }
    }
}
