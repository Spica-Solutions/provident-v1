import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan.component';

const routes: Routes = [
    {
        path: '',
        component: LoanComponent,
        children: [
            { path: 'new', loadChildren: async () => (await import('./loan-new/loan-new.module')).LoanNewModule },
            { path: 'edit', loadChildren: async () => (await import('./loan-edit/loan-edit.module')).LoanEditModule },
            { path: 'list', loadChildren: async () => (await import('./loan-list/loan-list.module')).LoanListModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
