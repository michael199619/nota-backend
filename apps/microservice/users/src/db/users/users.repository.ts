import { Injectable } from "@nestjs/common";
import { AddSalaryUserDto,ChangeRoleUserDto,CreateUserDto,EditUserDto,GetAllUsersDto,GetSalaryUsersDto,RemoveSalaryUserDto } from "@perfume-platform/common";
import { Repository } from "../base.repository";
import { Prisma,PrismaService,User } from "../prisma.service";
import { selectSalary,selectShort,selectUser } from "./users.select";

@Injectable()
export class UsersRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    getShortUserById(id: string) {
        return this.prisma.user.findFirst({
            select: {
                id: true,
                password: true,
                login: true
            },
            where: {id }
        })
    }

    getUserByLogin(login: string) {
        return this.prisma.user.findFirst({
            select: {
                id: true,
                password: true
            },
            where: {login }
        })
    }

    async getUsers(dto: GetAllUsersDto) {
        const where: Prisma.UserWhereInput = {
            //     ...this.getContains<User>('name', dto.seatch),
        }

        const [data, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                select: {
                    ...selectShort,
                    role: {
                        select: selectShort
                    }
                },
                ...this.preparePagination(dto)
            }),
            this.prisma.user.count({ where })
        ]);

        return this.paginationResponse({ data, total })
    }

    getUserById(id: string) {
        return this.prisma.user.findFirst({
            where: { id },
            select: {
                ...selectUser,
                role: {
                    select: selectShort
                }
            }
        })
    }

    changePasswordUser(id: string, password: string) {
        return this.prisma.user.update({
            where: {id},
            data: {
                password
            }
        })
    }

    createUser(data: CreateUserDto) {
        return this.prisma.user.create({
            data,
            select: {
                ...selectUser,
                role: {
                    select: selectShort
                }
            }
        })
    }

    editUser({ id, ...data }: EditUserDto) {
        return this.prisma.user.update({
            where: { id },
            data,
            select: {
                ...selectUser,
                role: {
                    select: selectShort
                }
            }
        })
    }

    removeUserById(id: string) {
        return this.prisma.user.delete({
            where: { id },
            select: {
                id: true
            }
        })
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

    async removeSalaryUser({ ids, userId }: RemoveSalaryUserDto) {
        await this.prisma.salary.deleteMany({
            where: { userId, id: { in: ids } },
        });
    }

    getSalaryUserById(id: string) {
        return this.prisma.user.findFirst({
            where: { id },
            select: {
                ...selectShort,
                salaries: {
                    select: {
                        ...selectSalary,
                        user: false
                    }
                },
                role: {
                    select: selectShort
                }
            }
        });
    }

    async getSalaryUsers(dto: GetSalaryUsersDto) {
        const where: Prisma.UserWhereInput = {};

        if (dto.search) {
            where.OR = where.OR || [];

            where.OR.push(this.getContains<User>('name', dto.search)!);
            where.OR.push(this.getContains<User>('login', dto.search)!);
            where.OR.push(this.getContains<User>('email', dto.search)!);
            where.OR.push(this.getContains<User>('phone', dto.search)!);
        }

        const [data, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                select: {
                    ...selectUser,
                    salaries: {
                        select: selectSalary
                    },
                    role: {
                        select: selectShort
                    },
                },
                ...this.preparePagination(dto)
            }),
            this.prisma.user.count({ where })
        ]);

        return this.paginationResponse({ data, total })
    }
} 