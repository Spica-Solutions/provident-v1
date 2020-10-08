import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDashComponent } from './member-dash.component';

const routes: Routes = [{ path: '', component: MemberDashComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberDashRoutingModule { }
