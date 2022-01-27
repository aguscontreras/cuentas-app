import { Member } from './member.model';

export class Product {
  nombre: string;
  precio: number;
  members: { [key: string]: boolean }[];
  private _id: string;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.members = [];
    this._id = Math.random().toString(36).substring(2, 18);
  }

  get id() {
    return this._id;
  }
}
