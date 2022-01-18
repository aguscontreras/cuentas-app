import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('../productos/productos.module').then(
        (m) => m.ProductosPageModule
      ),
  },
  {
    path: 'participantes',
    loadChildren: () =>
      import('../participantes/participantes.module').then(
        (m) => m.ParticipantesPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
