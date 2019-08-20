import { Module } from '@nestjs/common';
import { NxConfigModule } from '@nx-dev-starter/nx-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    NxConfigModule.forRoot(path.resolve(__dirname, 'env', !ENV ? '.env' : `.env.${ENV}`))
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}