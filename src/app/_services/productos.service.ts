import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSource: BehaviorSubject<Product[]>;
  public products$: Observable<Product[]>;

  constructor() {
    this.productsSource = new BehaviorSubject<Product[]>([]);
    this.products$ = this.productsSource.asObservable();
  }

  getAll(): Product[] {
    return this.productsSource.getValue();
  }

  getProductoById(id: number): Product {
    return this.productsSource.getValue().find((product) => product.id === id);
  }

  addProduct(producto: Product): void {
    if (producto != null) {
      this.productsSource.next([...this.productsSource.getValue(), producto]);
    }
  }

  updateProduct(product: Product): void {
    const isProduct = (e: Product) => e.id === product.id;
    const index = this.productsSource.getValue().findIndex(isProduct);
    const allProducts = this.productsSource.getValue();

    if (index > 0) {
      allProducts[index] = product;
      this.productsSource.next([...allProducts]);
    }
  }

  removeProduct(id: number): void {
    const filteredProducts = this.productsSource
      .getValue()
      .filter((product) => product.id !== id);

    this.productsSource.next(filteredProducts);
  }
}
