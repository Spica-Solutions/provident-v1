import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { RoleComponent } from './role.component';

const routes: Routes = [
    {
        path: '',
        component: RoleComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: async () => (await import('./role-list/role-list.module')).RoleListModule },
            { path: 'view', loadChildren: async () => (await import('./role-view/role-view.module')).RoleViewModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
