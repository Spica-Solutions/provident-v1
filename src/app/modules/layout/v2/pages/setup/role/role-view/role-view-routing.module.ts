import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleViewComponent } from './role-view.component';

const routes: Routes = [{ path: '', component: RoleViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleViewRoutingModule { }
