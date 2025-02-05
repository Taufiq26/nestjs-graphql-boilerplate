import { NotFoundException, UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/guards/qgl-auth.guard';
import { GqlThrottlerGuard } from '../common/guards/throttler-gql.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => UserEntity)
@UseGuards(GqlThrottlerGuard)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserEntity, { 
    name: 'currentUser',
    description: 'Get current user data. Requires Authorization header with Bearer token.'
  })
  @UseGuards(GqlAuthGuard)
  getCurrentUser(@CurrentUser() user: UserEntity): Promise<void | UserEntity> {
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.usersService.findOne(user.id);
  }
}
