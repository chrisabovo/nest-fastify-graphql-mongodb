import { Injectable } from '@nestjs/common';
import { User } from '../../graphql.schema';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { id: 1, username: 'jao.01', name: 'Jão 1', email: 'jao.01@teste.com' },
  ];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find(x => x.id === id);
  }
}
