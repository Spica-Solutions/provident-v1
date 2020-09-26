import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanEditRoutingModule } from './loan-edit-routing.module';
import { LoanEditComponent } from './loan-edit.component';

import { LoanEditFormModule } from '../loan-edit-form/loan-edit-form.module';

@NgModule({
  declarations: [LoanEditComponent],
  imports: [
    CommonModule,
    LoanEditRoutingModule,

    LoanEditFormModule
  ],
  exports: [
      LoanEditComponent
  ]
})
export class LoanEditModule { }
