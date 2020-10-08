import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan.component';

const routes: Routes = [
    {
        path: '',
        component: LoanComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: async () => (await import('./loan-list/loan-list.module')).LoanListModule },
            { path: 'view', loadChildren: async () => (await import('./loan-view/loan-view.module')).LoanViewModule },
            { path: 'approve', loadChildren: async () => (await import('./loan-approve/loan-approve.module')).LoanApproveModule },
            { path: 'billingstatement', loadChildren: async () => (await import('./billing-statement/billing-statement.module')).BillingStatementModule },
            { path: 'importremittance', loadChildren: async () => (await import('./import-remittance/import-remittance.module')).ImportRemittanceModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
