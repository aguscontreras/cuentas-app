import { Product } from './';

export class ProductList {
  name: string;
  products: Product[];

  constructor(name: string) {
    this.name = name;
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
}
