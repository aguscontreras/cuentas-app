import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member, Product } from '../../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  products: Product[] = [];
  gastado: number;
  members: Member[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToProductosPage(): void {
    this.router.navigateByUrl('tabs/overview/productos');
  }
}
