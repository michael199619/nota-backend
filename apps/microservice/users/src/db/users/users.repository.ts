import { Injectable } from "@nestjs/common";
import { AddSalaryUserDto, ChangeRoleUserDto } from "@perfume-platform/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";
import { selectSalary, selectShort, selectUser } from "./users.select";

@Injectable()
export class UsersRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    getUsers() {
        return this.prisma.user.findMany()
    }

    getUserById(id: string) {
        return this.prisma.user.findFirst({
            where: { id },
            select: {
                id: true
            }
        })
    }

    createUser() {

    }

    editUser(id: string) {

    }

    removeUserById(id: string) {

    }

    changeRoleUser(dto: ChangeRoleUserDto) {
        return this.prisma.user.update({
            select: {
                ...selectUser,
                role: {
                    select: selectShort
                }
            },
            where: {
                id: dto.id
            },
            data: {
                roleId: dto.roleId
            }
        })
    }

    async addSalaryUser(dto: AddSalaryUserDto) {
        const { user } = await this.prisma.salary.create({
            select: {
                user: {
                    select: {
                        ...selectShort,
                        salaries: {
                            select: selectSalary
                        },
                        role: {
                            select: selectShort
                        }
                    }
                }
            },
            data: {
                userId: dto.id,
                value: dto.val,
                type: dto.type,
                valueType: dto.valueType,
                day: dto.day
            }
        });

        return user
    }

    removeSalaryUserById(id: string) {

    }

} 