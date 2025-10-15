import { Injectable } from "@nestjs/common";
import { GetRolesDto } from "@perfume-platform/common";
import { Repository } from "../base.repository";
import { Prisma, PrismaService, Role } from "../prisma.service";
import { selectShort } from "../users/users.select";

@Injectable()
export class RolesRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    async getRoles(dto: GetRolesDto) {
        const where: Prisma.RoleWhereInput = {
            ...this.getContains<Role>('name', dto.search),
        }

        const [data, total] = await Promise.all([
            this.prisma.role.findMany({
                where,
                select: selectShort,
                ...this.preparePagination(dto)
            }),
            this.prisma.role.count({ where })
        ]);

        return this.paginationResponse({ data, total })
    }
}