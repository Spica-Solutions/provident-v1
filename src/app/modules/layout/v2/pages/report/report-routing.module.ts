import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            { path: 'finstatement', loadChildren: async () => (await import('./financial-statement/financial-statement.module')).FinancialStatementModule },
            { path: 'genledger', loadChildren: async () => (await import('./general-ledger/general-ledger.module')).GeneralLedgerModule },
            { path: 'fincondition', loadChildren: async () => (await import('./financial-condition/financial-condition.module')).FinancialConditionModule },
            { path: 'activities', loadChildren: async () => (await import('./statement-activities/statement-activities.module')).StatementActivitiesModule },
            { path: 'cashflows', loadChildren: async () => (await import('./statement-cashflows/statement-cashflows.module')).StatementCashflowsModule },
            { path: 'equity', loadChildren: async () => (await import('./statement-equity/statement-equity.module')).StatementEquityModule },
            { path: 'cashposition', loadChildren: async () => (await import('./cash-position/cash-position.module')).CashPositionModule },
            { path: 'pettycash', loadChildren: async () => (await import('./petty-cash/petty-cash.module')).PettyCashModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
