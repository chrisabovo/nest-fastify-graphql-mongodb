import {Logger} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import "dotenv/config";
import {AppModule} from "./app.module";

async function bootstrap() {
  const port = process.env.PORT;
  const url = `http://localhost:${port}`;

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({logger: false}));
  await app.listen(port);

  Logger.log(`🚀 Server started running on ${url}`, "Bootstrap");
}

bootstrap();
