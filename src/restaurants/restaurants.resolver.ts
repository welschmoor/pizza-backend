import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  myRestaurants(@Args('veganonly') veganonly?: boolean): Restaurant[] {
    if (veganonly) return [{ name: 'Cassidy', isGood: true }];
    return [{ name: 'Cassidy', isGood: true }];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() CreateRestaurantDto: CreateRestaurantDto): boolean {
    console.log('createRestaurantInput', CreateRestaurantDto);
    return true;
  }
}
