import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isGood?: boolean;

  @Field(() => String)
  address?: string;

  @Field(() => String)
  ownerName?: string;
}
