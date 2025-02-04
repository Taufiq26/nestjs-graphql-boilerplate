import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) {}

  async findOne(id: string): Promise<void | UserEntity> {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    const userResponse: UserEntity = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      otpSecret: user.otpSecret!
    }

    return userResponse;
  }
}