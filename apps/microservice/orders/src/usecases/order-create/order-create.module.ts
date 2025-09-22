import { Module } from "@nestjs/common";
import { OrderCreateUsecase } from "./order-create.usecase";

@Module({
    providers: [OrderCreateUsecase],
    exports: [OrderCreateUsecase]
})
export class OrderCreateModule { }
