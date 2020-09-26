import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEditBeneficiariesComponent } from './member-edit-beneficiaries.component';

const routes: Routes = [{ path: '', component: MemberEditBeneficiariesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEditBeneficiariesRoutingModule { }
