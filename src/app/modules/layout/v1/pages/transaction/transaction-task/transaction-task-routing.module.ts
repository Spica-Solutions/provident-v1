import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionTaskComponent } from './transaction-task.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionTaskComponent,
        children: [
            { path: 'billing', loadChildren: async () => (await import('./generate-billing-statement/generate-billing-statement.module')).GenerateBillingStatementModule },
            { path: 'remittance', loadChildren: async () => (await import('./import-remittance/import-remittance.module')).ImportRemittanceModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionTaskRoutingModule { }
