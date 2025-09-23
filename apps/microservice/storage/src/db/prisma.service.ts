import { Injectable } from '@nestjs/common';
import { prismaServiceFabric } from '@perfume-platform/common';
import { PrismaClient } from 'prisma_types/storage';
export * from 'prisma_types/storage';

@Injectable()
export class PrismaService extends prismaServiceFabric(
  PrismaClient,
  'StoragePrismaService',
) {
  constructor() {
    super();
  }


  async seed() {

  }

}
