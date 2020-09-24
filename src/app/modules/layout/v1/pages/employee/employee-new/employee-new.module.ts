import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeNewRoutingModule } from './employee-new-routing.module';
import { EmployeeNewComponent } from './employee-new.component';


@NgModule({
  declarations: [EmployeeNewComponent],
  imports: [
    CommonModule,
    EmployeeNewRoutingModule
  ]
})
export class EmployeeNewModule { }
