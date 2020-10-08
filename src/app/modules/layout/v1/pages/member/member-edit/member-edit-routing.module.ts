import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { V1ListResolver } from '../../../resolvers/v1-list.resolver';
import { MemberEditComponent } from './member-edit.component';

const routes: Routes = [
    {
        path: '',
        component: MemberEditComponent,
        children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            {
                path: 'details',
                loadChildren: async () => (await import('../member-edit-form/member-edit-form.module')).MemberEditFormModule
            },
            {
                path: 'benefs',
                loadChildren: async () => (await import('../member-edit-beneficiaries/member-edit-beneficiaries.module')).MemberEditBeneficiariesModule,
                resolve: { list: V1ListResolver },
                data: { listtype: 'beneficiaries' }
            },
            {
                path: 'contribs',
                loadChildren: async () => (await import('../member-contribs/member-contribs.module')).MemberContribsModule,
                resolve: { list: V1ListResolver },
                data: { listtype: 'contributions' }
            },
            {
                path: 'loans',
                loadChildren: async () => (await import('../member-loans/member-loans.module')).MemberLoansModule,
                resolve: { list: V1ListResolver },
                data: { listtype: 'loans' }
            }
            // { path: 'ledger', loadChildren: async () => (await import('./member-edit-ledger/member-edit-ledger.module')).MemberEditLedgerModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberEditRoutingModule { }
