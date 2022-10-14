import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { title } from "process";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') title: string, 
        @Body('description') description: string, 
        @Body('price') price: number
    ) {
        const generatedId = this.productService.addProduct(title, description, price);
        return {id: generatedId}
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProduct(id);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string, 
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number,
    ) {
        this.productService.updateProduct(id, title, description, price);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        this.productService.deleteProduct(id);
        return null;
    }
}
