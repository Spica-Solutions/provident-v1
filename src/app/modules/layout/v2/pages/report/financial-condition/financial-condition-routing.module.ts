import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialConditionComponent } from './financial-condition.component';

const routes: Routes = [{ path: '', component: FinancialConditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialConditionRoutingModule { }
