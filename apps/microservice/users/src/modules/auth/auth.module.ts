import { Module } from "@nestjs/common";
import { ConfigType } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "../../db/prisma.module";
import { jwtConfig } from "../config/config";
import { ConfigurationModule } from "../config/config.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        PrismaModule,
        JwtModule.registerAsync({
            imports: [ConfigurationModule],
            inject: [jwtConfig.KEY],
            useFactory(config: ConfigType<typeof jwtConfig>) {
                return { secret: config.secret }
            }
        })
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule { }
