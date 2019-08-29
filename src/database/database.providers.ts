import * as mongoose from 'mongoose';
import { DBConstants } from './database.constants';

export const databaseProviders = [
  {
    provide: DBConstants.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest-fastify-graphql-mongodb', {
        useNewUrlParser: true,
        useCreateIndex: true,
      }),
  },
];
