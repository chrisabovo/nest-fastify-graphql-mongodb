import { Connection } from 'mongoose';
import { DatabaseConstants } from '../database.constants';
import { UserSchema } from '../schemas/user.schema';

export const userProviders = [
  {
    provide: DatabaseConstants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DatabaseConstants.DATABASE_CONNECTION],
  },
];
