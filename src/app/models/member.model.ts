import { Product } from '.';

export class Member {
  name: string;
  payment: number;
  debt: number;
  productos: Product[];

  constructor(name: string, payment: number) {
    this.name = name;
    this.payment = payment;
    this.debt = 0;
    this.productos = [];
  }

  get balance(): number {
    return this.payment - this.debt;
  }
}
