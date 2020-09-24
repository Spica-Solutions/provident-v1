import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldCheckboxRoutingModule } from './field-checkbox-routing.module';
import { FieldCheckboxComponent } from './field-checkbox.component';


@NgModule({
  declarations: [FieldCheckboxComponent],
  imports: [
    CommonModule,
    FieldCheckboxRoutingModule
  ],
  exports: [
      FieldCheckboxComponent
  ]
})
export class FieldCheckboxModule { }
