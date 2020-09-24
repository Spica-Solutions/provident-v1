import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditBeneficiariesComponent } from './employee-edit-beneficiaries.component';

const routes: Routes = [{ path: '', component: EmployeeEditBeneficiariesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEditBeneficiariesRoutingModule { }
