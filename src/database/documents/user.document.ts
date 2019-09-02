import { Document } from 'mongoose';
import { UserInput } from '../../graphql.schema';

export interface UserDocument extends Document, UserInput {}
