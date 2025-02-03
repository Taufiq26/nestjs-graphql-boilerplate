import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) {}

  async findOne(id: string): Promise<any> {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }
}