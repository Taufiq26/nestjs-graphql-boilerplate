import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/guards/qgl-auth.guard';
import { GqlThrottlerGuard } from '../common/guards/throttler-gql.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
@UseGuards(GqlThrottlerGuard)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { 
    name: 'currentUser',
    description: 'Get current user data. Requires Authorization header with Bearer token.'
  })
  @UseGuards(GqlAuthGuard)
  getCurrentUser(@CurrentUser() user: User): Promise<User> {
    return this.usersService.findOne(user.id);
  }
}
