import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanNewRoutingModule } from './loan-new-routing.module';
import { LoanNewComponent } from './loan-new.component';

import { LoanEditFormModule } from '../loan-edit-form/loan-edit-form.module';

@NgModule({
  declarations: [LoanNewComponent],
  imports: [
    CommonModule,
    LoanNewRoutingModule,

    LoanEditFormModule
  ],
  exports: [
      LoanNewComponent
  ]
})
export class LoanNewModule { }
