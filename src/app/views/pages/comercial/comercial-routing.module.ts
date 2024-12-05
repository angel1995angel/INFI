import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComercialComponent } from './comercial.component';
import { InventarioComponent } from './inventario/inventario.component';
import { OficinaComponent } from './oficina/oficina.component';

const routes: Routes = [
  {
    path: '',
    component: ComercialComponent,
  },
  {
    path: 'inventario',
    component: InventarioComponent,
  },
  {
    path: 'oficina',
    component: OficinaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
