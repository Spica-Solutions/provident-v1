import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLedgerComponent } from './general-ledger.component';

const routes: Routes = [{ path: '', component: GeneralLedgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralLedgerRoutingModule { }
