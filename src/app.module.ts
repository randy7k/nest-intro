import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModele } from './products/products.module';

@Module({
  imports: [productsModele],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
