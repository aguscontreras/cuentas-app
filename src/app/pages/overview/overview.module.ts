import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';
import { OverviewPage } from './overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule
  ],
  declarations: [OverviewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverviewPageModule {}
