import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
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

  it('/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/')
      .expect(200, 'Hello World!');
  });
});
