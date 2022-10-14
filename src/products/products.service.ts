import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    addProduct(title: string, description: string, price: number) {
        const id = Math.random().toString();
        const newProduct = new Product(id, title, description, price);
        this.products.push(newProduct);
        return id;
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(id: string) {
        const product = this.findProduct(id)[0];
        return {...product}; 
    }
    
    updateProduct(id: string, title: string, description: string, price: number){
        const [product, index] = this.findProduct(id)
        const updatedProduct = {...product}
        
        if (title) {
            updatedProduct.title = title;
        }
        if  (description) {
            updatedProduct.description = description;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    deleteProduct(id: string) {
        const index = this.findProduct(id)[1];
        this.products.splice(index, 1);
    }

    findProduct(id: string): [Product, number] {
        const product = this.products.find((product) => product.id === id);
        const index = this.products.findIndex((product) => product.id === id);
        if (!product) {
            throw new NotFoundException("Coud not find a product");
        }
        return [product, index];
    }
}
