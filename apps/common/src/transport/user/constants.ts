export const TRANSPORT_USER_KAFKA = 'TRANSPORT_USER_KAFKA';
export const TRANSPORT_USER_NATS = 'TRANSPORT_USER_NATS';
export const TRASPORT_USER_GROUP = 'TRANSPORT_USER_GROUP';

export enum UserTopics {
    USER_GET_PERFUME = 'user.get.perfume',
    USER_GET = 'user.get'
}

export const userTopics = Object.values(UserTopics);