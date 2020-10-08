import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingStatementRoutingModule } from './billing-statement-routing.module';
import { BillingStatementComponent } from './billing-statement.component';


@NgModule({
  declarations: [BillingStatementComponent],
  imports: [
    CommonModule,
    BillingStatementRoutingModule
  ]
})
export class BillingStatementModule { }
