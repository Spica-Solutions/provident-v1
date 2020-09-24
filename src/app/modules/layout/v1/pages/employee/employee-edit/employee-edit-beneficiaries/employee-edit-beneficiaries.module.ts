import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeEditBeneficiariesRoutingModule } from './employee-edit-beneficiaries-routing.module';
import { EmployeeEditBeneficiariesComponent } from './employee-edit-beneficiaries.component';


@NgModule({
  declarations: [EmployeeEditBeneficiariesComponent],
  imports: [
    CommonModule,
    EmployeeEditBeneficiariesRoutingModule
  ],
  exports: [
      EmployeeEditBeneficiariesComponent
  ]
})
export class EmployeeEditBeneficiariesModule { }
