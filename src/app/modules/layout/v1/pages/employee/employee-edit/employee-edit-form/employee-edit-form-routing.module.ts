import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditFormComponent } from './employee-edit-form.component';

const routes: Routes = [{ path: '', component: EmployeeEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEditFormRoutingModule { }
