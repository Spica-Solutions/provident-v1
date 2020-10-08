import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialStatementComponent } from './financial-statement.component';

const routes: Routes = [{ path: '', component: FinancialStatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialStatementRoutingModule { }
