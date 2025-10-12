import { Module } from "@nestjs/common";
import { PrismaModule } from "../../db/prisma.module";
import { ChangeRoleUserUsecase } from "./change-role-user.usecase";

@Module({
    imports: [PrismaModule],
    providers: [ChangeRoleUserUsecase],
    exports: [ChangeRoleUserUsecase]
})
export class ChangeRoleUserModule { }
