import { Member } from './member.model';

export class Product {
  nombre: string;
  precio: number;
  members: Member[];
  private _id: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.members = [];
    this._id = new Date().getTime();
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
