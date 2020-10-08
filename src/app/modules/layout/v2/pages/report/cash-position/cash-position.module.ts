import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashPositionRoutingModule } from './cash-position-routing.module';
import { CashPositionComponent } from './cash-position.component';


@NgModule({
  declarations: [CashPositionComponent],
  imports: [
    CommonModule,
    CashPositionRoutingModule
  ]
})
export class CashPositionModule { }
