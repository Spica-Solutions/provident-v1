import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: async () => (await import('./account-list/account-list.module')).AccountListModule },
            { path: 'new', loadChildren: async () => (await import('./account-new/account-new.module')).AccountNewModule },
            { path: 'edit', loadChildren: async () => (await import('./account-edit/account-edit.module')).AccountEditModule },
            { path: 'register', loadChildren: async () => (await import('./account-register/account-register.module')).AccountRegisterModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
