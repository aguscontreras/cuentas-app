import { NgModule } from '@angular/core';
import { AbmProductoComponent } from './abm-producto/abm-producto.component';
import { AbmPersonaComponent } from './abm-persona/abm-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [AbmProductoComponent, AbmPersonaComponent],
  exports: [AbmProductoComponent, AbmPersonaComponent],
})
export class ComponentsModule {}
