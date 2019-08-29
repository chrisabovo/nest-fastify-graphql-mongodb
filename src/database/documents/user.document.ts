import { Document } from 'mongoose';

export interface UserDocument extends Document {
  readonly username: string;
  readonly name: string;
  readonly email: string;
}
