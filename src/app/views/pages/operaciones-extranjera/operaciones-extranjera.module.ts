import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesExtranjerasRoutingModule } from './operaciones-extranjera-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenudeoComponent } from './menudeo/menudeo.component';
import { IntervencionComponent } from './intervencion/intervencion.component';
import { MesaCambioComponent } from './mesa-cambio/mesa-cambio.component';
import { OperacionesExtranjeraComponent } from './operaciones-extranjera.component';



@NgModule({
  declarations: [
    MenudeoComponent,
    IntervencionComponent,
    MesaCambioComponent,
    OperacionesExtranjeraComponent
  ],
  imports: [
    CommonModule,
    OperacionesExtranjerasRoutingModule,
    SharedModule
  ]
})
export class OperacionesExtranjeraModule { }
