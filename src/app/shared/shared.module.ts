import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from './design/design.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DesignModule
  ],
  exports: [
    DesignModule
  ]
})
export class SharedModule { }
