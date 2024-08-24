import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomIoAdapter } from './core/adapters/io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: '*',
  };
  app.enableCors(corsOptions);
  app.useWebSocketAdapter(new CustomIoAdapter(app));
  await app.listen(3000);
}
bootstrap();
