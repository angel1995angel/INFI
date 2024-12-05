import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion.component';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionComponent
  },
  {
    path: 'parametros',
    component : ParametrosComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
