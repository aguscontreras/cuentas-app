import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../productos/productos.module').then(
        (m) => m.ProductosPageModule
      ),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('../members/members.module').then((m) => m.MembersPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
