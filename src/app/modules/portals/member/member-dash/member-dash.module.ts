import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDashRoutingModule } from './member-dash-routing.module';
import { MemberDashComponent } from './member-dash.component';


@NgModule({
  declarations: [MemberDashComponent],
  imports: [
    CommonModule,
    MemberDashRoutingModule
  ]
})
export class MemberDashModule { }
