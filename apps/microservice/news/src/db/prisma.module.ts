import { Module } from '@nestjs/common';
import { ArticlesRepository } from './articles/articles.repository';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    PrismaService,
    ArticlesRepository,
  ],
  exports: [
    PrismaService,
    ArticlesRepository,
  ],
})
export class PrismaModule { }
