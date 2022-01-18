import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Producto } from '../../../models/producto';
import { ProductosService } from '../../../_services/productos.service';

@Component({
  selector: 'app-abm-producto',
  templateUrl: './abm-producto.component.html',
  styleUrls: ['./abm-producto.component.scss'],
})
export class AbmProductoComponent implements OnInit {
  @Input() producto: Producto;
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalController: ModalController,
    private readonly productosService: ProductosService
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
      const producto = new Producto(this.f.nombre.value, this.f.precio.value);

      if (this.producto != null) {
        //  this.productosService.updateProducto(producto);
        this.producto.nombre = producto.nombre;
        this.producto.precio = producto.precio;
      } else {
        this.productosService.addProducto(producto);
      }

      this.modalController.dismiss(producto);
    }
  }
}
