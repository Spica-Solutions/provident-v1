import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEditFormComponent } from './member-edit-form.component';

const routes: Routes = [{ path: '', component: MemberEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEditFormRoutingModule { }
