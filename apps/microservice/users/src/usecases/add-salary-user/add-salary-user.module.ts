import { Module } from "@nestjs/common";
import { PrismaModule } from "../../db/prisma.module";
import { AddSalaryUserUsecase } from "./add-salary-user.usecase";

@Module({
    imports: [PrismaModule],
    providers: [AddSalaryUserUsecase],
    exports: [AddSalaryUserUsecase]
})
export class AddSalaryUserModule { }
