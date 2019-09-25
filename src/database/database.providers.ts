import * as mongoose from 'mongoose';
import { DBConstants } from './database.constants';

export const databaseProviders = [
  {
    provide: DBConstants.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }),
  },
];
