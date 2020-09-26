import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanEditComponent } from './loan-edit.component';

const routes: Routes = [{ path: '', component: LoanEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanEditRoutingModule { }
