import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanNewComponent } from './loan-new.component';

const routes: Routes = [{ path: '', component: LoanNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanNewRoutingModule { }
