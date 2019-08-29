import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User, UserInput } from '../../graphql.schema';
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
    @Args('_id')
    _id: string,
  ): Promise<User> {
    return await this.userService.findOneById(_id);
  }

  @Mutation('createUser')
  async create(@Args('userInput') args: UserInput): Promise<User> {
    const created = await this.userService.create(args);
    pubSub.publish('userCreated', { userCreated: created });
    return created;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}
