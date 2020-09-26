import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldTextViewRoutingModule } from './field-text-view-routing.module';
import { FieldTextViewComponent } from './field-text-view.component';


@NgModule({
  declarations: [FieldTextViewComponent],
  imports: [
    CommonModule,
    FieldTextViewRoutingModule
  ],
  exports: [
      FieldTextViewComponent
  ]
})
export class FieldTextViewModule { }
