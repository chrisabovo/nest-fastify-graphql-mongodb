import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from '../../database/providers/user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  // controllers: [UserController],
  providers: [UserService, UserResolver, ...userProviders],
})
export class UserModule {}
