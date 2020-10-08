import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementEquityComponent } from './statement-equity.component';

const routes: Routes = [{ path: '', component: StatementEquityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementEquityRoutingModule { }
