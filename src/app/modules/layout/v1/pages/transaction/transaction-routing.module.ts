import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionComponent,
        children: [
            { path: 'loan', loadChildren: async () => (await import('./loan/loan.module')).LoanModule },
            { path: 'task', loadChildren: async () => (await import('./transaction-task/transaction-task.module')).TransactionTaskModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
