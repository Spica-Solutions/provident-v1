import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldFileComponent } from './field-file.component';

const routes: Routes = [{ path: '', component: FieldFileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldFileRoutingModule { }
