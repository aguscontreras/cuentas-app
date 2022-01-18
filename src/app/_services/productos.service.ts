import { Injectable } from '@angular/core';
import { Producto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public productos: Producto[] = [];

  constructor() {}

  getAll(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto {
    return this.productos.find((producto) => producto.id === id);
  }

  addProducto(producto: Producto): void {
    if (producto != null) {
      this.productos.push(producto);
    }
  }

  removeProducto(id: number): void {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }
}
