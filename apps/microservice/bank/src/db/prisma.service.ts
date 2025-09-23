import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/bank';
export * from 'prisma_types/bank';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'BankPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
