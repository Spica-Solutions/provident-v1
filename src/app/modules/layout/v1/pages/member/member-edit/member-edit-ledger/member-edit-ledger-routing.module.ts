import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEditLedgerComponent } from './member-edit-ledger.component';

const routes: Routes = [{ path: '', component: MemberEditLedgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEditLedgerRoutingModule { }
