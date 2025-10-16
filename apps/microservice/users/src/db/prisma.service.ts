import { Injectable } from '@nestjs/common';
import { PasswordHasher, prismaServiceFabric, roles, users } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/users';
export * from 'prisma_types/users';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'UsersPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {
    this.logger.log('seed users')
    await Promise.all(Object.keys(roles).map((name) => {
      return this.role.upsert({
        update: {},
        create: roles[name],
        where: {
          id: roles[name].id
        }
      })
    }))

    await Promise.all(users.map(async (user) => {
      return this.user.upsert({
        where: { id: user.id },
        update: {},
        create: {
          ...user,
          password: await PasswordHasher.getHashPassword(user.password)
        }
      })
    }))
  }

}
