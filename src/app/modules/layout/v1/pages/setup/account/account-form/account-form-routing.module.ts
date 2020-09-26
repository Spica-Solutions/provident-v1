import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFormComponent } from './account-form.component';

const routes: Routes = [{ path: '', component: AccountFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountFormRoutingModule { }
