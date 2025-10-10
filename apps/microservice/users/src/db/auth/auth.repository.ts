import { Injectable } from "@nestjs/common";
import { Repository } from "../base.repository";
import { PrismaService } from "../prisma.service";

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

    }

    createUser() {

    }

    editUser(id: string) {

    }

    removeUserById(id: string) {

    }

    changeRoleUser() {

    }

    addSalaryUser() {

    }

    removeSalaryUserById(id: string) {

    }

} 