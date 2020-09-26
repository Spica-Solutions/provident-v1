import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberLoansComponent } from './member-loans.component';

const routes: Routes = [{ path: '', component: MemberLoansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberLoansRoutingModule { }
