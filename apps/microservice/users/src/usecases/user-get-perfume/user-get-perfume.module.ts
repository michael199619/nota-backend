import { Module } from "@nestjs/common";
import { UserGetPerfumeUsecase } from "./user-get.perfume.usecase";

@Module({
  providers: [UserGetPerfumeUsecase],
  exports: [UserGetPerfumeUsecase]
})
export class UserGetPerfumeModule { }
