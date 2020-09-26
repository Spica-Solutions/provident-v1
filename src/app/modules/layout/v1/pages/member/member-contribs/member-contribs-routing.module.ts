import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberContribsComponent } from './member-contribs.component';

const routes: Routes = [{ path: '', component: MemberContribsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberContribsRoutingModule { }
