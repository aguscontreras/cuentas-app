import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../_services/productos.service';

@Component({
  selector: 'app-abm-producto',
  templateUrl: './abm-producto.component.html',
  styleUrls: ['./abm-producto.component.scss'],
})
export class AbmProductoComponent implements OnInit {
  @Input() producto: Product;
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalController: ModalController,
    private readonly alertController: AlertController,
    private readonly productsService: ProductsService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.producto != null) {
      this.form.patchValue({
        nombre: this.producto.nombre,
        precio: this.producto.precio,
      });
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      if (this.producto != null) {
        const product = this.productsService.getProductoById(this.producto.id);
        product.nombre = this.f.nombre.value;
        product.precio = this.f.precio.value;
        this.productsService.updateProduct(product);
        this.modalController.dismiss(product, 'edit');
      } else {
        const product = new Product(this.f.nombre.value, this.f.precio.value);
        this.productsService.addProduct(product);
        this.modalController.dismiss(product, 'add');
      }
    }
  }

  handleClickBtnRemove(): void {
    this.presentAlertRemoveItem();
  }

  private async presentAlertRemoveItem() {
    const alert = await this.alertController.create({
      header: 'Ola',
      subHeader: 'Confirman2',
      message: '¿Deseas quitar el producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'btnCancel',
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: 'Aceptar',
          role: 'accept',
          id: 'btnAccept',
          handler: () => {
            this.removeItem();
          },
        },
      ],
    });

    await alert.present();
  }

  private removeItem(): void {
    this.productsService.removeProduct(this.producto.id);
    this.alertController.dismiss();
    setTimeout(() => {
      this.modalController.dismiss(null, 'remove');
    }, 0);
  }
}
