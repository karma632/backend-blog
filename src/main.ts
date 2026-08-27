import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log("🔥🔥🔥 THIS IS MY NEW CODE 🔥🔥🔥");
  
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  app.enableCors({
    origin: `${process.env.UI_URL}`,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3002);
}


bootstrap();