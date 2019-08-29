import { Connection } from 'mongoose';
import { DBCollectionConstants, DBConstants } from '../database.constants';
import { UserSchema } from '../schemas/user.schema';

export const userProviders = [
  {
    provide: DBConstants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(DBCollectionConstants.USER, UserSchema),
    inject: [DBConstants.DATABASE_CONNECTION],
  },
];
