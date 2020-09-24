import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldTextComponent } from './field-text.component';

const routes: Routes = [{ path: '', component: FieldTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldTextRoutingModule { }
