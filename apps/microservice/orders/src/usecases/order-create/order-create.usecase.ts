import { ControllerResponse, Usecase } from "@perfume-platform/common";
import { IOrderController, IOrderCreate, OrderCreateResponse } from "@perfume-platform/common/transport/order";

export class OrderCreateUsecase extends Usecase<IOrderController['orderCreate']> {
    handler(dto: IOrderCreate): ControllerResponse<OrderCreateResponse> {
        return {
            id: Math.floor(Math.random() * 1000).toString(),
            userId: dto.userId,
            productId: dto.productId,
            quantity: dto.quantity,
            total: dto.total,
            status: 'pending',
            createdAt: new Date().toISOString()

        }
    }
}
