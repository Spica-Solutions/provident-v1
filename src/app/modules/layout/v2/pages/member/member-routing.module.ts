import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { MemberComponent } from './member.component';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: async () => (await import('./member-list/member-list.module')).MemberListModule },
            { path: 'new', loadChildren: async () => (await import('./member-new/member-new.module')).MemberNewModule },
            { path: 'view', loadChildren: async () => (await import('./member-view/member-view.module')).MemberViewModule },
            { path: 'import', loadChildren: async () => (await import('./member-import/member-import.module')).MemberImportModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
