export const TRANSPORT_ORDER_KAFKA = 'TRANSPORT_ORDER_KAFKA';
export const TRANSPORT_ORDER_NATS = 'TRANSPORT_ORDER_NATS';
export const TRASPORT_ORDER_GROUP = 'TRANSPORT_ORDER_GROUP';

export enum OrderTopics {
    ORDER_CREATE = 'order.create'
}

export const orderTopics = Object.values(OrderTopics);