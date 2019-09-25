# nest-fastify-graphql-mongodb

Exemplo de uso com Nestjs + Fastify + Graphql + MongoDB

## Description

[Nest](https://nestjs.com/) - framework TypeScript starter repository.

[Fastfy](https://www.fastify.io/) - Fast and low overhead web framework, for Node.js.

[Graphql](https://graphql.org/) - A query language for your API.

[MongoDB](https://www.mongodb.com/) - The database for modern application.

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
    _id
    username
    name
    email
  }
}
```

QUERY: user

```graphql
{
  user(_id: "5d6818d4746d745380219668") {
    _id
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
      username: "maria.04"
      name: "maria 004"
      email: "maria4@test.com"
    }
  ) {
    _id
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
    _id
    username
    name
    email
  }
}
```
