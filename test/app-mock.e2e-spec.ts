import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import { AppServiceMock } from './mock/app.service.mock';

describe('AppController with Mock (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useClass(AppServiceMock)
      .compile();

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

  it('/ (GET)', async () => {
    return await request(this.app.getHttpServer())
      .get('/')
      .expect(200, 'Hello World - Mocked!');
  });
});
