import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    login(password: string, email: string) {
        return this.prisma.user.findFirst({
            where: { password, email }
        });
    }
}