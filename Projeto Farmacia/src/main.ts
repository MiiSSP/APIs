import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  process.env.TZ = `-03:00`
  
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
}
bootstrap();
