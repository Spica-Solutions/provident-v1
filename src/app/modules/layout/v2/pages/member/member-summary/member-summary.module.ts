import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberSummaryRoutingModule } from './member-summary-routing.module';
import { MemberSummaryComponent } from './member-summary.component';


@NgModule({
  declarations: [MemberSummaryComponent],
  imports: [
    CommonModule,
    MemberSummaryRoutingModule
  ]
})
export class MemberSummaryModule { }
