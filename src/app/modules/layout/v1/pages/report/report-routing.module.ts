import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            { path: 'balancesheet', loadChildren: async () => (await import('./balance-sheet/balance-sheet.module')).BalanceSheetModule },
            { path: 'trialbalance', loadChildren: async () => (await import('./trial-balance/trial-balance.module')).TrialBalanceModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
