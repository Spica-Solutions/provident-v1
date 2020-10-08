import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';
import { GeneralLedgerComponent } from './general-ledger.component';


@NgModule({
  declarations: [GeneralLedgerComponent],
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule
  ]
})
export class GeneralLedgerModule { }
