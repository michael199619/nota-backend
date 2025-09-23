import { Module } from "@nestjs/common";
import { PaymentProcessUsecase } from "./payment-process.usecase";

@Module({
    providers: [PaymentProcessUsecase],
    exports: [PaymentProcessUsecase]
})
export class PaymentProcessModule { }
