import { Module } from "@nestjs/common";
import { ProductGetUsecase } from "./product-get.usecase";

@Module({
    providers: [ProductGetUsecase],
    exports: [ProductGetUsecase]
})
export class ProductGetModule { }
