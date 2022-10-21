import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModele } from './products/products.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({ isGlobal: true,envFilePath: `.env.${process.env.NODE_ENV || 'develop'}`,}),
    MongooseModule.forRoot(process.env.CONECTION),
    productsModele,
  ],
    

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
