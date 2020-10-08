import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementCashflowsComponent } from './statement-cashflows.component';

const routes: Routes = [{ path: '', component: StatementCashflowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementCashflowsRoutingModule { }
