import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean)
  isGood: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownerName: string;
}
