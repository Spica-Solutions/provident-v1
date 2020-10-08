import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: async () => (await import('./user-list/user-list.module')).UserListModule },
            { path: 'view', loadChildren: async () => (await import('./user-view/user-view.module')).UserViewModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
