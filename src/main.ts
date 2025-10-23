// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 4000 },
  });

  await app.startAllMicroservices();
  await app.listen(3000);

  console.log(`HTTP: http://localhost:3000`);
  console.log(`Swagger: http://localhost:3000/docs`);
  console.log(`Micro TCP: 0.0.0.0:4000`);
}
bootstrap();
