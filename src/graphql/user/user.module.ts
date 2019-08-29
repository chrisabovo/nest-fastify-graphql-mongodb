import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/database/providers/user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  // controllers: [UserController],
  providers: [UserService, UserResolver, ...userProviders],
})
export class UserModule {}
