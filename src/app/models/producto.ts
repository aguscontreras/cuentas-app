export class Producto {
  nombre: string;
  precio: number;
  id: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = new Date().getTime();
  }
}
