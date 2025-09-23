import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/orders';
export * from 'prisma_types/orders';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'OrdersPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
