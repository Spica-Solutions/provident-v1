import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'edit', loadChildren: async () => (await import('./member-edit/member-edit.module')).MemberEditModule },
            { path: 'list', loadChildren: async () => (await import('./member-list/member-list.module')).MemberListModule },
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
