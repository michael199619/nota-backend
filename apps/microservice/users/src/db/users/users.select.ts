import { Prisma } from "../prisma.service"

export const selectShort = {
    id: true,
    name: true
}

export const selectSalary: Prisma.SalarySelect = {
    id: true,
    userId: true,
    value: true,
    type: true,
    valueType: true,
    day: true
}

export const selectUser: Prisma.UserSelect = {
    id: true,
    name: true,
    email: true,
    phone: true,
    login: true,
    avatarId: true
}