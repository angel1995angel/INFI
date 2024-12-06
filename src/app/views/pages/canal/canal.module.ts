import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CanalComponent } from './canal.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CanalRoutingModule } from './canal-routing.module';
import { PoliticaComponent } from './politica/politica.component';

@NgModule({
  declarations: [CanalComponent,InventarioComponent, PoliticaComponent],
  imports: [
    CommonModule,
    CanalRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class CanalModule {}
