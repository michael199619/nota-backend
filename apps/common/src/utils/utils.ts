import { RpcException } from "@nestjs/microservices";
import { Observable } from "rxjs";

type Response<data> = Promise<data> | Observable<data> | data;
export type ControllerResponse<data> = Promise<Response<data>> | Response<data>;

export abstract class Usecase<func extends (...args: any[]) => any> {
    protected abstract handler(...args: Parameters<func>): ReturnType<func>

    public async excecute(...args: Parameters<func>): Promise<ReturnType<func>> {
        try {
            return await this.handler(...args)
        } catch (e) {
            throw new RpcException({ status: e.status, error: e.error, message: e.message })
        }
    }
}