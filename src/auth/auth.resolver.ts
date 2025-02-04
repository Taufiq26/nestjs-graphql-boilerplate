import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { LoginResponse } from './types/login-response.type';
import { GqlAuthGuard } from './guards/qgl-auth.guard';
import { GqlThrottlerGuard } from '../common/guards/throttler-gql.guard';
import { RegistrationResponse } from './types/registration-response.type';
import { RegisterInput } from './inputs/register.input';

@Resolver('Authentication')
@UseGuards(GqlThrottlerGuard)
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

  @Mutation(() => RegistrationResponse, {
    description: 'Register a new user',
    name: 'register',
  })
  async register(
    @Args('registerInput') registerInput: RegisterInput
  ): Promise<RegistrationResponse> {
    const user = await this.authService.registerUser(
      registerInput.email,
      registerInput.password
    )

    return {
      success: true,
      message: 'User registered successfully',
      user: user
    };
  }
}
