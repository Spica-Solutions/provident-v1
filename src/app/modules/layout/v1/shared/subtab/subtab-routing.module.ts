import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtabComponent } from './subtab.component';

const routes: Routes = [{ path: '', component: SubtabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubtabRoutingModule { }
