import { Module } from "@nestjs/common";
import { UserGetUsecase } from "./user-get.usecase";

@Module({
    providers: [UserGetUsecase],
    exports: [UserGetUsecase]
})
export class UserGetModule { }
