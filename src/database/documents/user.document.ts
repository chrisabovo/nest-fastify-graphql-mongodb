import { Document } from 'mongoose';
import { UserInput } from 'src/graphql.schema';

export interface UserDocument extends Document, UserInput {}
