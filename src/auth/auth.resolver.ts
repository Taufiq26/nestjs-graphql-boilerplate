import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { LoginResponse } from './types/login-response.type';
import { GqlAuthGuard } from './guards/qgl-auth.guard';

@Resolver('Authentication')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String, { 
    name: 'guardedExampleAPI',
    description: 'Example API. Requires Authorization header with Bearer token.'
  })
  @UseGuards(GqlAuthGuard)
  guardedExampleAPI(): string {
    return 'Example of guarded API!';
  }

  @Mutation(() => LoginResponse, {
    description: 'Login with email and password',
    name: 'login'
  })
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<LoginResponse> {
    const user = await this.authService.validateUser(
      loginInput.email,
      loginInput.password
    );
    return this.authService.login(user);
  }
}
