import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanApproveComponent } from './loan-approve.component';

const routes: Routes = [{ path: '', component: LoanApproveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanApproveRoutingModule { }
