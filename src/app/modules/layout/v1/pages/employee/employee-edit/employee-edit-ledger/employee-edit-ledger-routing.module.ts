import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditLedgerComponent } from './employee-edit-ledger.component';

const routes: Routes = [{ path: '', component: EmployeeEditLedgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEditLedgerRoutingModule { }
