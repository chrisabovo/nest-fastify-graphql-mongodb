import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('graphql.user (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication().init();
  });

  afterAll(async () => {
    if (this.app) {
      await this.app.close();
    }

    mongoose.connections.forEach(async con => {
      await con.close();
    });
    await mongoose.disconnect();

    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  /*
  it('should send users to you', async done => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          getUsers {
            _id
            username
            name
            email
          }
        }`,
      })
      .expect(200, done);
  });
  */

  it('/graphql query{ getUsers() }', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{getUsers{_id, username}}',
      })
      .expect(200);
  });

  it('/graphql query{ user() }', async () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          user(_id: "5d682f2740ab3b445013fbf6") {
            username
          }
        }`,
      })
      .expect(200, '{"data":{"user":{"username":"maria.04"}}}\n');
  });
});
