import { Connection } from 'mongoose';
import {
  DBCollectionConstants,
  DBConstants,
  DBModelConstants,
} from '../database.constants';
import { UserSchema } from '../schemas/user.schema';

export const userProviders = [
  {
    provide: DBModelConstants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(DBCollectionConstants.USER, UserSchema),
    inject: [DBConstants.DATABASE_CONNECTION],
  },
];
