import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public products: Product[] = [];

  constructor() {}

  getAll(): Product[] {
    return this.products;
  }

  getProductoById(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  addProduct(producto: Product): void {
    if (producto != null) {
      this.products.push(producto);
    }
  }

  removeProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
