import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldSelectRoutingModule } from './field-select-routing.module';
import { FieldSelectComponent } from './field-select.component';


@NgModule({
  declarations: [FieldSelectComponent],
  imports: [
    CommonModule,
    FieldSelectRoutingModule
  ],
  exports: [
      FieldSelectComponent
  ]
})
export class FieldSelectModule { }
