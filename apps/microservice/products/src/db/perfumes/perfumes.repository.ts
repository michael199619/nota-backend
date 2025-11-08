import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PerfumesRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    createPerfume() {

    }

    editPerfume() {

    }

    changeStatusPerfume(id: string, status: any) {

    }

    getPerfumeById(id: string) {

    }

    getPerfumes() {

    }
} 