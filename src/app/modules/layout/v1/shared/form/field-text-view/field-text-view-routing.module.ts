import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldTextViewComponent } from './field-text-view.component';

const routes: Routes = [{ path: '', component: FieldTextViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldTextViewRoutingModule { }
