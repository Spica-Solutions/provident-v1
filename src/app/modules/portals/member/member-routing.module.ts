import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            { path: '', redirectTo: 'dash', pathMatch: 'full' },
            { path: 'dash', loadChildren: async () => (await import('./member-dash/member-dash.module')).MemberDashModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
