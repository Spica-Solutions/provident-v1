import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementEquityRoutingModule } from './statement-equity-routing.module';
import { StatementEquityComponent } from './statement-equity.component';


@NgModule({
  declarations: [StatementEquityComponent],
  imports: [
    CommonModule,
    StatementEquityRoutingModule
  ]
})
export class StatementEquityModule { }
