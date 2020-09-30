import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { MemberListResolver } from './member-list/member-list.resolver';
import { MemberEditResolver } from './member-edit-form/member-edit-form.resolver';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'edit',
                loadChildren: async () => (await import('./member-edit/member-edit.module')).MemberEditModule,
                resolve: { rec: MemberEditResolver }
            },
            {
                path: 'list',
                loadChildren: async () => (await import('./member-list/member-list.module')).MemberListModule,
                resolve: { list: MemberListResolver }
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
