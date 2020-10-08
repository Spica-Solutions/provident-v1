import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEmpinfoEditComponent } from './member-empinfo-edit.component';

const routes: Routes = [{ path: '', component: MemberEmpinfoEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEmpinfoEditRoutingModule { }
