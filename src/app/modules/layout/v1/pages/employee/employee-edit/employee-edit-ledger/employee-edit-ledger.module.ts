import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeEditLedgerRoutingModule } from './employee-edit-ledger-routing.module';
import { EmployeeEditLedgerComponent } from './employee-edit-ledger.component';


@NgModule({
  declarations: [EmployeeEditLedgerComponent],
  imports: [
    CommonModule,
    EmployeeEditLedgerRoutingModule
  ],
  exports: [
      EmployeeEditLedgerComponent
  ]
})
export class EmployeeEditLedgerModule { }
