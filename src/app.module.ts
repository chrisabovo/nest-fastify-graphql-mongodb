import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './graphql/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
