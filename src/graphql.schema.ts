
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class UserInput {
    username?: string;
    name?: string;
    email?: string;
}

export abstract class IMutation {
    abstract createUser(userInput?: UserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;

    abstract user(_id?: string): User | Promise<User>;
}

export abstract class ISubscription {
    abstract userCreated(): User | Promise<User>;
}

export class User {
    _id?: string;
    username?: string;
    name?: string;
    email?: string;
}
