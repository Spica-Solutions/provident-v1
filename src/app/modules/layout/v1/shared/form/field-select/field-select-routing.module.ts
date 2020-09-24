import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldSelectComponent } from './field-select.component';

const routes: Routes = [{ path: '', component: FieldSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldSelectRoutingModule { }
