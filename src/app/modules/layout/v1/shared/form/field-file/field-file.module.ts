import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldFileRoutingModule } from './field-file-routing.module';
import { FieldFileComponent } from './field-file.component';


@NgModule({
  declarations: [FieldFileComponent],
  imports: [
    CommonModule,
    FieldFileRoutingModule
  ],
  exports: [
      FieldFileComponent
  ]
})
export class FieldFileModule { }
