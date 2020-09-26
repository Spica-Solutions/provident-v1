import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanEditFormComponent } from './loan-edit-form.component';

const routes: Routes = [{ path: '', component: LoanEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanEditFormRoutingModule { }
