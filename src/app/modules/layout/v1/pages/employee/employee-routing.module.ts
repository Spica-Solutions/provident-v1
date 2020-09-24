import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'edit', loadChildren: async () => (await import('./employee-edit/employee-edit.module')).EmployeeEditModule },
            { path: 'list', loadChildren: async () => (await import('./employee-list/employee-list.module')).EmployeeListModule },
            { path: 'new', loadChildren: async () => (await import('./employee-edit/employee-edit.module')).EmployeeEditModule },
            { path: 'import', loadChildren: async () => (await import('./employee-import/employee-import.module')).EmployeeImportModule }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
