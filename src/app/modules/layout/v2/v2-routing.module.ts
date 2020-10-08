import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2Component } from './v2.component';

const routes: Routes = [
    {
        path: '',
        component: V2Component,
        children: [
            { path: '', redirectTo: 'member', pathMatch: 'full' },
            { path: 'member', loadChildren: async () => (await import('./pages/member/member.module')).MemberModule },
            { path: 'loan', loadChildren: async () => (await import('./pages/loan/loan.module')).LoanModule },
            { path: 'role', loadChildren: async () => (await import('./pages/setup/role/role.module')).RoleModule },
            { path: 'user', loadChildren: async () => (await import('./pages/setup/user/user.module')).UserModule },
            { path: 'report', loadChildren: async () => (await import('./pages/report/report.module')).ReportModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2RoutingModule { }
