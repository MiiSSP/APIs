import { ValidationPipe } from '@nestjs/common';
import { APP_FILTER, NestFactory } from '@nestjs/core';
import { validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  process.env.TZ = `-03:00`

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
}
bootstrap();
