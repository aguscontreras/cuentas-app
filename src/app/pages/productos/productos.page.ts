import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbmProductoComponent } from '../../components/popup/abm-producto/abm-producto.component';
import { Product } from '../../models';
import { ProductosService } from '../../_services/productos.service';
import { ToastService } from '../../_services/toast.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public products: Product[];
  public selectedProducto: Product;
  public total: number = 0;

  constructor(
    public readonly modalController: ModalController,
    private readonly productosService: ProductosService,
    private readonly toastService: ToastService
  ) {
    this.products = this.productosService.products;
  }

  ngOnInit() {
    this.calculateTotal();
  }

  handleClickBtnAdd(): void {
    this.presentModal();
  }

  handleClickItem(productId: number): void {
    this.selectedProducto = this.products.find(
      (product) => product.id === productId
    );

    this.presentModal(this.selectedProducto);
  }

  async presentModal(producto?: Product) {
    const modal = await this.modalController.create({
      component: AbmProductoComponent,
      componentProps: { producto },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5],
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

    this.products = this.productosService.products;
    this.calculateTotal();
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
