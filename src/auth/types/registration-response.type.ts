import { Field, ObjectType } from "@nestjs/graphql";
import { BaseResponse } from '../../common/types/base-response.type';
import { UserEntity } from '../../users/entities/user.entity';

@ObjectType({ description: 'Response After Registration' })
export class RegistrationResponse extends BaseResponse {
    @Field(() => UserEntity, {
        nullable: false,
        description: 'User details' 
    })
    user?: UserEntity
}