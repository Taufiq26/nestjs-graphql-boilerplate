import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { LoginResponse } from './types/login-response.type';

@Resolver('Authentication')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // Add this simple Query
  @Query(() => String)
  authStatus() {
    return 'Auth system is running!';
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
