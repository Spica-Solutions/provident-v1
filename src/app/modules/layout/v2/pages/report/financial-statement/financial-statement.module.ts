import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialStatementRoutingModule } from './financial-statement-routing.module';
import { FinancialStatementComponent } from './financial-statement.component';


@NgModule({
  declarations: [FinancialStatementComponent],
  imports: [
    CommonModule,
    FinancialStatementRoutingModule
  ]
})
export class FinancialStatementModule { }
