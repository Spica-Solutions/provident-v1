import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';

const routes: Routes = [
    {
        path: '',
        component: SetupComponent,
        children: [
            { path: 'account', loadChildren: async () => (await import('./account/account.module')).AccountModule },
            { path: 'loc', loadChildren: async () => (await import('./locations/locations.module')).LocationsModule },
            { path: 'dept', loadChildren: async () => (await import('./departments/departments.module')).DepartmentsModule },
            { path: 'user', loadChildren: async () => (await import('./users/users.module')).UsersModule },
            { path: 'role', loadChildren: async () => (await import('./roles/roles.module')).RolesModule },
            { path: 'companysettings', loadChildren: async () => (await import('./company-settings/company-settings.module')).CompanySettingsModule },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
