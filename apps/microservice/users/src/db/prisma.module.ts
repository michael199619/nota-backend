import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RolesRepository } from './roles/roles.repository';
import { UsersRepository } from './users/users.repository';

@Module({
  providers: [
    PrismaService,
    UsersRepository,
    RolesRepository
  ],
  exports: [
    PrismaService,
    UsersRepository,
    RolesRepository
  ],
})
export class PrismaModule { }
