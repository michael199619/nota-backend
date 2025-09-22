import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
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

  }

}
