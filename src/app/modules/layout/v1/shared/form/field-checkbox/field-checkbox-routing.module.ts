import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldCheckboxComponent } from './field-checkbox.component';

const routes: Routes = [{ path: '', component: FieldCheckboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldCheckboxRoutingModule { }
