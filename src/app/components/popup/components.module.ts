import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AbmProductoComponent } from './abm-producto/abm-producto.component';
import { AbmPersonaComponent } from './abm-persona/abm-persona.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [AbmProductoComponent, AbmPersonaComponent],
  exports: [AbmProductoComponent, AbmPersonaComponent],
})
export class ComponentsModule {}
