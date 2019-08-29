# nest-fastify-graphql-mongodb

Exemplo de uso com Nestjs + Fastify + Graphql + MongoDB

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## URL Testing

<http://localhost:3333>

### GraphQL Starter

GraphQL PlayGround --> <http://localhost:3333/graphql>

QUERY: getUsers

```graphql
{
  getUsers {
    id
    username
    name
    email
  }
}
```

QUERY: user

```graphql
{
  user(id: 1) {
    id
    username
    name
    email
  }
}
```

MUTATION: createUser

```graphql
mutation {
  createUser(
    userInput: {
      username: "maria.01"
      name: "maria 001"
      email: "maria1@test.com"
    }
  ) {
    id
    username
    name
    email
  }
}
```

SUBSCRIPTION: userCreated

```graphql
subscription {
  userCreated {
    id
    username
    name
    email
  }
}
```
