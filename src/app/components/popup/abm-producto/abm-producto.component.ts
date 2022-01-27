import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../_services/productos.service';
import { MembersService } from '../../../_services/members.service';
import { Member } from '../../../models';

@Component({
  selector: 'app-abm-producto',
  templateUrl: './abm-producto.component.html',
  styleUrls: ['./abm-producto.component.scss'],
})
export class AbmProductoComponent implements OnInit {
  @Input() product: Product;
  members: Member[] = [];
  form: FormGroup;
  isNewProduct: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalController: ModalController,
    private readonly alertController: AlertController,
    private readonly productsService: ProductsService,
    private readonly membersService: MembersService
  ) {}

  ngOnInit() {
    if (this.product == null) {
      this.product = new Product('', 0);
      this.isNewProduct = true;
    }

    this.form = this.fb.group({
      nombre: [this.product.nombre, Validators.required],
      precio: [
        this.product.precio,
        [Validators.required, Validators.min(0.01)],
      ],
    });

    this.membersService.members$.subscribe({
      next: (members) => (this.members = members),
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.product.nombre = this.f.nombre.value;
    this.product.precio = this.f.precio.value;

    if (this.isNewProduct) {
      this.productsService.addProduct(this.product);
      this.modalController.dismiss(this.product, 'add');
    } else {
      this.productsService.updateProduct(this.product);
      this.modalController.dismiss(this.product, 'edit');
    }
  }

  handleClickBtnRemove(): void {
    this.presentAlertRemoveItem();
  }

  handleClickMemberItem(member: Member): void {
    member.products[this.product.id] = !member.products[this.product.id];
    this.product.members[member.id] = !this.product.members[member.id];
    console.log(member);
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
    this.productsService.removeProduct(this.product.id);
    this.alertController.dismiss();
    setTimeout(() => {
      this.modalController.dismiss(null, 'remove');
    }, 0);
  }
}
