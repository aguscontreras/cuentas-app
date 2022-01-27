import { Product } from '.';

export class Member {
  name: string;
  payment: number;
  debt: number;
  products: { [key: string]: boolean }[];
  private _id: string;

  constructor(name: string, payment: number) {
    this.name = name;
    this.payment = payment;
    this.debt = 0;
    this.products = [];
    this._id = Math.random().toString(36).substring(2, 18);
  }

  get balance(): number {
    return this.payment - this.debt;
  }

  get id(): string {
    return this._id;
  }
}
