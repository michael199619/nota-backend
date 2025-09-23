import { Module } from "@nestjs/common";
import { ProductCreateUsecase } from "./product-create.usecase";

@Module({
    providers: [ProductCreateUsecase],
    exports: [ProductCreateUsecase]
})
export class ProductCreateModule { }
