import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenudeoComponent } from './menudeo/menudeo.component';
import { IntervencionComponent } from './intervencion/intervencion.component';
import { MesaCambioComponent } from './mesa-cambio/mesa-cambio.component';
import { OperacionesExtranjeraComponent } from './operaciones-extranjera.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesExtranjeraComponent
  },
  {
    path: 'menudeo',
    component : MenudeoComponent
  },
  {
    path: 'intervencion',
    component : IntervencionComponent
  },
  {
    path: 'mesa',
    component : MesaCambioComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesExtranjerasRoutingModule { }
