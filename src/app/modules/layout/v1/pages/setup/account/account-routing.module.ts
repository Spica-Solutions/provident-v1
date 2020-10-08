import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
// import { AccountListResolver } from './account-list/account-list.resolver_DELETE';
import { V1ListResolver } from '../../../resolvers/v1-list.resolver';
import { V1RecordResolver } from '../../../resolvers/v1-record.resolver';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                loadChildren: async () => (await import('./account-list/account-list.module')).AccountListModule,
                resolve: { list: V1ListResolver },
                data: { listtype: 'accounts'}
            },
            { path: 'new', loadChildren: async () => (await import('./account-new/account-new.module')).AccountNewModule },
            {
                path: 'edit',
                loadChildren: async () => (await import('./account-edit/account-edit.module')).AccountEditModule,
                resolve: { rec: V1RecordResolver },
                data: { listtype: 'accounts' }
            },
            { path: 'register', loadChildren: async () => (await import('./account-register/account-register.module')).AccountRegisterModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
