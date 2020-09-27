import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateBillingStatementComponent } from './generate-billing-statement.component';

const routes: Routes = [{ path: '', component: GenerateBillingStatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateBillingStatementRoutingModule { }
