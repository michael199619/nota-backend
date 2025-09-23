import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/products';
export * from 'prisma_types/products';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'ProductsPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
