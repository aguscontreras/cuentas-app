import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public products: Product[] = [];

  constructor() {
    this.products.push({
      nombre: 'Coca Cola',
      precio: 180,
      id: 1,
    });

    this.products.push({
      nombre: 'Vino tinto',
      precio: 200,
      id: 2,
    });

    this.products.push({
      nombre: 'Verduleria',
      precio: 300,
      id: 3,
    });
  }

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
