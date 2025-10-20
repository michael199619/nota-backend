import { Injectable,NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";
import { ContextService } from "./context.service";

@Injectable()
export class ContextMiddleware implements NestMiddleware {
    constructor(
        private readonly ctx: ContextService
    ) {}

    use(req: Request, res: Response, next: NextFunction) {
        this.ctx.req = req;
        this.ctx.res = res;

        next();
    }
}