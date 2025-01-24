import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Habilitamos peticiones de cualquier origen solo para fines de desarrollo
  });

  await app.listen(process.env.PORT ?? 3050);
}
bootstrap();
