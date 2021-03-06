import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    this.app = await moduleFixture.createNestApplication().init();
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

  test('/ (GET)', async () => {
    return await request(this.app.getHttpServer())
      .get('/')
      .expect(200, 'Hello World!');
  });
});
