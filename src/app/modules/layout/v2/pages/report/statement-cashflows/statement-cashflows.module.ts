import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementCashflowsRoutingModule } from './statement-cashflows-routing.module';
import { StatementCashflowsComponent } from './statement-cashflows.component';


@NgModule({
  declarations: [StatementCashflowsComponent],
  imports: [
    CommonModule,
    StatementCashflowsRoutingModule
  ]
})
export class StatementCashflowsModule { }
