import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { title } from 'process';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(@Body() body: any) {
    return this.productService.create(body);
  }

  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: number, @Body() body: any) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
