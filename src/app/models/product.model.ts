import { Member } from './member.model';

export class Product {
  nombre: string;
  precio: number;
  members: Member[];
  private _id: string;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.members = [];
    this._id = Math.random().toString(36).substr(2, 18);
  }

  get id() {
    return this._id;
  }

  addMember(member: Member) {
    this.members = [...this.members, member];
  }

  removeMember(member: Member) {
    this.members = this.members.filter(
      (m) => m.name.toLowerCase() !== member.name.toLowerCase()
    );
  }
}
