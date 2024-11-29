import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from "ng-apexcharts";
import { QuillModule } from 'ngx-quill';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  exports : [
    FormsModule,
    FeatherIconModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    QuillModule,
    ArchwizardModule,
    NgxDatatableModule
  ]
  
})
export class DesignModule { }
