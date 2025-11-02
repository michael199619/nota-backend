import { RpcException } from "@nestjs/microservices";
import { Observable } from "rxjs";

type Response<data>=Promise<data>|Observable<data>|data;
export type ControllerResponse<data>=Promise<Response<data>>|Response<data>;

export type SearchPrisma<Obj extends Record<string,any>,T extends keyof Obj>={ key: T,value: Obj[T] };
export abstract class Usecase<func extends (...args: any[]) => any> {
    protected abstract handler(...args: Parameters<func>): ReturnType<func>

    public async excecute(...args: Parameters<func>): Promise<Awaited<ReturnType<func>>> {
        try {
            return await this.handler(...args)
        } catch (e) {
            console.error(e)
            throw new RpcException({ status: e.status,error: e.error,message: e.message })
        }
    }
}

export const getContains=<Obj extends Object>(key: keyof Obj,contains?: string) => {
    if (contains) {
        return {
            [key]: {
                contains
            }
        }
    }
}

export const getTokenFromBase64=(token: string) => {
    return Buffer.from(token,'base64').toString('utf-8');
}