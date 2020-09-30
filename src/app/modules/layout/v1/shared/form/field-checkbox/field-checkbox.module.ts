import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldCheckboxRoutingModule } from './field-checkbox-routing.module';
import { FieldCheckboxComponent } from './field-checkbox.component';


@NgModule({
  declarations: [FieldCheckboxComponent],
  imports: [
    CommonModule,
    FieldCheckboxRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
      FieldCheckboxComponent
  ]
})
export class FieldCheckboxModule { }
