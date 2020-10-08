import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';

import { V1ListResolver } from '../../resolvers/v1-list.resolver';
import { V1RecordResolver } from '../../resolvers/v1-record.resolver';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'edit',
                loadChildren: async () => (await import('./member-edit/member-edit.module')).MemberEditModule,
                resolve: { rec: V1RecordResolver },
                data: { listtype: 'members' }
            },
            {
                path: 'list',
                loadChildren: async () => (await import('./member-list/member-list.module')).MemberListModule,
                resolve: { list: V1ListResolver },
                data: { listtype: 'members' }
            },
            { path: 'new', loadChildren: async () => (await import('./member-new/member-new.module')).MemberNewModule },
            { path: 'import', loadChildren: async () => (await import('./member-import/member-import.module')).MemberImportModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
