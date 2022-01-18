import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participante, Producto } from '../../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  productos: Producto[] = [];
  gastado: number;
  participantes: Participante[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToProductosPage(): void {
    this.router.navigateByUrl('tabs/overview/productos');
  }
}
