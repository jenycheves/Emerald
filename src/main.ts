import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  var Ddos = require('ddos')
  var express = require('express')
  var ddos = new Ddos({burst:10, limit:15})
  app.use(ddos.express);
  
  await app.listen(3000);
}
bootstrap();
