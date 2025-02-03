import { Field, ObjectType } from '@nestjs/graphql';
import { BaseResponse } from '../../common/types/base-response.type';

@ObjectType({ description: 'Response after login attempt' })
export class LoginResponse extends BaseResponse {
  @Field(() => String, {
    nullable: true,
    description: 'JWT token for authentication'
  })
  access_token?: string;
}
