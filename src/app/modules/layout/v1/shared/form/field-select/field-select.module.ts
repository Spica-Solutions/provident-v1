import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldSelectRoutingModule } from './field-select-routing.module';
import { FieldSelectComponent } from './field-select.component';


@NgModule({
  declarations: [FieldSelectComponent],
  imports: [
    CommonModule,
    FieldSelectRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
      FieldSelectComponent
  ]
})
export class FieldSelectModule { }
