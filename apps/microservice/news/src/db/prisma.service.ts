import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/news';
export * from 'prisma_types/news';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'NewsPrismaService',
) {
  constructor() {
    super();
  }


  async seed() {
    this.logger.log('seed articles')



    this.logger.log('seed articles finished')
  }

}
