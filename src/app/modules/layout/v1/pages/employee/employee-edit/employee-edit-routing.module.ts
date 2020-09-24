import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { EmployeeEditComponent } from './employee-edit.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeEditComponent,
        children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            { path: 'details', loadChildren: async () => (await import('./employee-edit-form/employee-edit-form.module')).EmployeeEditFormModule },
            { path: 'benefs', loadChildren: async () => (await import('./employee-edit-beneficiaries/employee-edit-beneficiaries.module')).EmployeeEditBeneficiariesModule },
            { path: 'ledger', loadChildren: async () => (await import('./employee-edit-ledger/employee-edit-ledger.module')).EmployeeEditLedgerModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEditRoutingModule { }
