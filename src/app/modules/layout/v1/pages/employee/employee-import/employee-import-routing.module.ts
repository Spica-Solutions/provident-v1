import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeImportComponent } from './employee-import.component';

const routes: Routes = [{ path: '', component: EmployeeImportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeImportRoutingModule { }
