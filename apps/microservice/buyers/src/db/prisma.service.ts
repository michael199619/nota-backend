import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/buyers';
export * from 'prisma_types/buyers';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'BuyersPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
