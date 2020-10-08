import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingStatementComponent } from './billing-statement.component';

const routes: Routes = [{ path: '', component: BillingStatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingStatementRoutingModule { }
