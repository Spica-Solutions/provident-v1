import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEmpinfoComponent } from './member-empinfo.component';

const routes: Routes = [{ path: '', component: MemberEmpinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEmpinfoRoutingModule { }
