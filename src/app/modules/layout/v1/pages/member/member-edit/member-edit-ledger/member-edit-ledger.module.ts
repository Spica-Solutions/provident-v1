import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberEditLedgerRoutingModule } from './member-edit-ledger-routing.module';
import { MemberEditLedgerComponent } from './member-edit-ledger.component';


@NgModule({
  declarations: [MemberEditLedgerComponent],
  imports: [
    CommonModule,
    MemberEditLedgerRoutingModule
  ],
  exports: [
      MemberEditLedgerComponent
  ]
})
export class MemberEditLedgerModule { }
