import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from './design/design.module';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenericTableComponent,
    GenericModalComponent,
    GenericFormComponent,
  ],
  imports: [CommonModule, DesignModule, ReactiveFormsModule],
  exports: [
    DesignModule,
    GenericTableComponent,
    GenericModalComponent,
    GenericFormComponent,
  ],
})
export class SharedModule {}
