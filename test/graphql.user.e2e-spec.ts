import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
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
    if (app) {
      await app.close();
    }

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

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{getUsers{_id, username}}',
      })
      .expect(200);
  });

  it('/post /graphql', async () => {
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
