import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilidadRoutingModule } from './utilidad-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProcesosOperativoComponent } from './procesos-operativo/procesos-operativo.component';

@NgModule({
  declarations: [ProcesosOperativoComponent],
  imports: [
    CommonModule,
    UtilidadRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class UtilidadModule {}
