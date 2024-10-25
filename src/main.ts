import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS para qualquer origem (para teste)
  app.enableCors({
    origin: '*', // Permite qualquer origem (para teste)
  });

  await app.listen(3000);
}
bootstrap();
