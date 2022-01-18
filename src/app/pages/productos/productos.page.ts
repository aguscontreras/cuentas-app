import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbmProductoComponent } from '../../components/popup/abm-producto/abm-producto.component';
import { Producto } from '../../models';
import { ProductosService } from '../../_services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public productos: Producto[];
  public selectedProducto: Producto;
  public total: number = 0;

  constructor(
    public readonly modalController: ModalController,
    private readonly productosService: ProductosService
  ) {
    this.productos = this.productosService.productos;
  }

  ngOnInit() {}

  handleClickBtnAdd(): void {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AbmProductoComponent,
      componentProps: { producto: this.selectedProducto },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5],
    });

    modal.onDidDismiss().then((res) => {
      if (res.data != null) {
        this.handleCloseModal(res.data);
      }
    });

    return await modal.present();
  }

  handleCloseModal(producto: Producto): void {
    console.log(producto);
    this.productos = this.productosService.productos;
    this.total = 0;
    this.productos.forEach((producto) => (this.total += producto.precio));
  }
}
