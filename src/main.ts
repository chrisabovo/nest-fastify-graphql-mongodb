import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import 'dotenv/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT;
  const url = `${process.env.SERVER}:${port}`;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  await app.listen(port);

  Logger.log(`🚀 Server started running on ${url}`, 'Bootstrap');
  if (JSON.parse(process.env.GRAPHQL_PLAYGROUND)) {
    Logger.log(`🎲 GraphQL Playground on ${url}/graphql`, 'Bootstrap');
  }
}

bootstrap();
