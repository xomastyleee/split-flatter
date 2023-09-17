import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000;

const config = new DocumentBuilder()
  .setTitle('Split-flutter example api')
  .setDescription('The Split-flutter API description')
  .setVersion('0.0.1')
  .addTag('split')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
