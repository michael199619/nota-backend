import { ControllerResponse } from "../../utils";
import { IUserGet, UserGetResponse } from "./dtos";
import { IUserGetPerfume } from "./dtos/create/create.dto";
import { userGetPerfumeResponse } from "./dtos/create/create.response";

export interface IUserTransportOptions {
    clientId: string;
    kafkaBrokers: string[];
    natsServers: string[];
}

export type IUserController = {
    userGetPerfume: (dto: IUserGetPerfume) => ControllerResponse<userGetPerfumeResponse>
    userGet: (dto: IUserGet) => ControllerResponse<UserGetResponse>
    // userDelete: (dto: UserCreateDto) => ControllerResponse<UserCreateResponse>

}