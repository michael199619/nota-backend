import { ControllerResponse, Usecase } from "@perfume-platform/common";

export interface IPaymentProcess {
    orderId: string;
    amount: number;
    method: string;
}

export interface PaymentProcessResponse {
    id: string;
    orderId: string;
    amount: number;
    method: string;
    status: string;
    transactionId: string;
    createdAt: string;
}

export class PaymentProcessUsecase extends Usecase<(dto: IPaymentProcess) => ControllerResponse<PaymentProcessResponse>> {
    handler(dto: IPaymentProcess): ControllerResponse<PaymentProcessResponse> {
        return {
            id: Math.floor(Math.random() * 1000).toString(),
            orderId: dto.orderId,
            amount: dto.amount,
            method: dto.method,
            status: 'completed',
            transactionId: `txn_${Math.floor(Math.random() * 10000)}`,
            createdAt: new Date().toISOString()
        }

    }
}
