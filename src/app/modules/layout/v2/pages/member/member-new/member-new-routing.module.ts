import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberNewComponent } from './member-new.component';

const routes: Routes = [{ path: '', component: MemberNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberNewRoutingModule { }
