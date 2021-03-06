import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbmProductoComponent } from '../../components/popup/abm-producto/abm-producto.component';
import { Product } from '../../models';
import { ProductsService } from '../../_services/productos.service';
import { ToastService } from '../../_services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public products$: Observable<Product[]>;
  public products: Product[];
  public selectedProducto: Product;
  public total: number = 0;

  constructor(
    public readonly modalController: ModalController,
    private readonly productsService: ProductsService,
    private readonly toastService: ToastService
  ) {
    this.products$ = this.productsService.products$;
  }

  ngOnInit() {
    this.productsService.products$.subscribe({
      next: (products) => {
        this.products = products;
        this.calculateTotal();
        console.log(this.products);
      },
    });
  }

  handleClickBtnAdd(): void {
    this.presentModal();
  }

  handleClickItem(productId: string): void {
    this.selectedProducto = this.products.find(
      (product) => product.id === productId
    );

    this.presentModal(this.selectedProducto);
  }

  async presentModal(product?: Product) {
    const modal = await this.modalController.create({
      component: AbmProductoComponent,
      componentProps: { product },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
    });

    modal.onDidDismiss().then((res) => {
      this.handleCloseModal(res.role, res.data);
    });

    return await modal.present();
  }

  handleCloseModal(role: string, producto?: Product): void {
    const messagesByRole = {
      add: `Se agregó ${producto?.nombre} a la lista`,
      edit: `Se modificó el item ${producto?.nombre}`,
      remove: `Item removido`,
    };

    if (messagesByRole[role]) {
      this.toastService.presentToast(messagesByRole[role]);
    }
  }

  calculateTotal(): void {
    this.total = 0;
    if (this.products.length) {
      this.products.forEach((producto) => (this.total += producto.precio));
    }
  }

  log(text: string): void {
    console.log(text);
  }
}
