import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProvidersRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    getProviderById() {

    }
  
    getProviders() {

    }

    createProvider() {

    }

    removeProvider() {

    }
} 