import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberViewComponent } from './member-view.component';
// import { MemberEmpinfoComponent } from '../member-empinfo/member-empinfo.component';

const routes: Routes = [
    {
        path: '',
        component: MemberViewComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberViewRoutingModule { }
