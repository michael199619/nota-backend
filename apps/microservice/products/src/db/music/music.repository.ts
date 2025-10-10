import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class MusicRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    getTracks() {

    }

    createTrack() {

    }

    removeTrack(id: string) {

    }

    getMusics() {

    }

    removeMusic(id: string) {

    }

    createMusic() {

    }
} 