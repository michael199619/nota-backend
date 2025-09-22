import { ControllerResponse } from "../../utils";
import { IOrderCreate } from "./dtos/create/create.dto";
import { OrderCreateResponse } from "./dtos/create/create.response";

export interface IOrderTransportOptions {
    clientId: string;
    kafkaBrokers: string[];
    natsServers: string[];
}

export type IOrderController = {
    orderCreate: (dto: IOrderCreate) => ControllerResponse<OrderCreateResponse>
}