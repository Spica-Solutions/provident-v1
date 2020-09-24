import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionComponent,
        children: [
            // { path: 'loan', loadChildren: async () => (await import('./'))}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
