import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from './design/design.module';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';



@NgModule({
  declarations: [GenericTableComponent, GenericModalComponent],
  imports: [CommonModule, DesignModule],
  exports: [DesignModule, GenericTableComponent, GenericModalComponent],
})
export class SharedModule {}
