import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberLoansRoutingModule } from './member-loans-routing.module';
import { MemberLoansComponent } from './member-loans.component';


@NgModule({
  declarations: [MemberLoansComponent],
  imports: [
    CommonModule,
    MemberLoansRoutingModule
  ]
})
export class MemberLoansModule { }
