import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilidadComponent } from './utilidad.component';
import { ProcesosOperativoComponent } from './procesos-operativo/procesos-operativo.component';

const routes: Routes = [
  {
    path: '',
    component: UtilidadComponent
  },
  {
    path: 'procesos-operativo',
    component : ProcesosOperativoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilidadRoutingModule { }
