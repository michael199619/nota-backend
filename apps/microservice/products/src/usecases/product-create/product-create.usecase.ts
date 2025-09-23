import { ControllerResponse, Usecase } from "@perfume-platform/common";

export interface IProductCreate {
    name: string;
    price: number;
    description: string;
    brand: string;
}

export interface ProductCreateResponse {
    id: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    createdAt: string;
}

export class ProductCreateUsecase extends Usecase<(dto: IProductCreate) => ControllerResponse<ProductCreateResponse>> {
    handler(dto: IProductCreate): ControllerResponse<ProductCreateResponse> {
        return {
            status: 'success',
            data: {
                id: Math.floor(Math.random() * 1000).toString(),
                name: dto.name,
                price: dto.price,
                description: dto.description,
                brand: dto.brand,
                createdAt: new Date().toISOString()
            }
        }
    }
}
