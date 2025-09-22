export interface OrderCreateResponse {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    total: number;
    status: string;
    createdAt: string;
}