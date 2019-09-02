import * as mongoose from 'mongoose';
import { Connection, Document } from 'mongoose';
import {
  DBCollectionConstants,
  DBConstants,
  DBModelConstants,
} from '../../database/database.constants';
import { UserInput } from '../../graphql.schema';

export const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
});

export interface UserDocument extends Document, UserInput {}

export const userProviders = [
  {
    provide: DBModelConstants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(DBCollectionConstants.USER, UserSchema),
    inject: [DBConstants.DATABASE_CONNECTION],
  },
];
