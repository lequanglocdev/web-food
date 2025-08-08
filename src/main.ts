/* eslint-disable @typescript-eslint/no-floating-promises */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function app() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 5002
  console.log(`Server started on port ${port}`)
  await app.listen(port)
}
app();
