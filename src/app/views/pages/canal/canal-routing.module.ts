import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalComponent } from './canal.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PoliticaComponent } from './politica/politica.component';

const routes: Routes = [
  {
    path: '',
    component: CanalComponent,
  },
  {
    path: 'inventario',
    component: InventarioComponent,
  },
  {
    path: 'politica',
    component: PoliticaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalRoutingModule { }
