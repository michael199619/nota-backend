import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ComponentsRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }
  
    getComponents() {

    }

    // один компонент может быть в наличие н кол-во, 
    // так и кончится компонент может столько, сколько и в наличие
    setFinishComponent(id: string, count: number) {

    }

    // компонент может быть добавлен существующий по имени и проваили может быть создан 
    batchComponents() {

    }

} 