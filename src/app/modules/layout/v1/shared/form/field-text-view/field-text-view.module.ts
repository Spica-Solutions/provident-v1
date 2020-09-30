import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldTextViewRoutingModule } from './field-text-view-routing.module';
import { FieldTextViewComponent } from './field-text-view.component';


@NgModule({
  declarations: [FieldTextViewComponent],
  imports: [
    CommonModule,
    FieldTextViewRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
      FieldTextViewComponent
  ]
})
export class FieldTextViewModule { }
