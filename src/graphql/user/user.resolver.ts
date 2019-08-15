import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User } from '../../graphql.schema';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Query('user')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<User> {
    return await this.userService.findOneById(id);
  }

  @Mutation('createUser')
  async create(@Args('userInput') args: UserDto): Promise<User> {
    const created = await this.userService.create(args);
    pubSub.publish('userCreated', { userCreated: created });
    return created;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}
