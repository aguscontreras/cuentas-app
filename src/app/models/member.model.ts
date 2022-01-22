import { Product } from '.';

export class Member {
  name: string;
  payment: number;
  debt: number;
  products: Product[];

  constructor(name: string, payment: number) {
    this.name = name;
    this.payment = payment;
    this.debt = 0;
    this.products = [];
  }

  get balance(): number {
    return this.payment - this.debt;
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
}
