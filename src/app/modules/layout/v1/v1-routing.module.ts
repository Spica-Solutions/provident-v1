import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './v1.component';
const routes: Routes = [
    {
        path: '',
        component: V1Component,
        children: [
            // { path: 'list', loadChildren: async () => (await import('./pages/list/list.module')).ListModule },
            { path: 'member', loadChildren: async () => (await import('./pages/member/member.module')).MemberModule },
            { path: 'transaction', loadChildren: async () => (await import('./pages/transaction/transaction.module')).TransactionModule },
            { path: 'report', loadChildren: async () => (await import('./pages/report/report.module')).ReportModule },
            // { path: 'upload', loadChildren: async () => (await import('./pages/upload/upload.module')).UploadModule }
            { path: 'setup', loadChildren: async () => (await import('./pages/setup/setup.module')).SetupModule  }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V1RoutingModule { }
