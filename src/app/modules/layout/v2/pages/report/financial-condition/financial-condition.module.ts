import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialConditionRoutingModule } from './financial-condition-routing.module';
import { FinancialConditionComponent } from './financial-condition.component';


@NgModule({
  declarations: [FinancialConditionComponent],
  imports: [
    CommonModule,
    FinancialConditionRoutingModule
  ]
})
export class FinancialConditionModule { }
