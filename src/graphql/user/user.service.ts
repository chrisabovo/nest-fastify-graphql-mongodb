﻿import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DBConstants } from 'src/database/database.constants';
import { UserDocument } from 'src/database/documents/user.document';
import { User, UserInput } from '../../graphql.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject(DBConstants.USER_MODEL)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(userInput: UserInput): Promise<User> {
    const created = new this.userModel(userInput);
    return await created.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
}