// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentação da API TallosFLix')
    .setDescription(
      'A API TallosFLix é um server que se conecta com o cinema da Tallos, onde é possível realizar requisições como consultas, cadastramento e login e ter acesso a lista de filmes, comentários e informações sobre o set de filmes.',
    )
    .setVersion('1.0')
    .addTag('TallosFlix')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
