import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/emails';
export * from 'prisma_types/emails';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'EmailsPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
