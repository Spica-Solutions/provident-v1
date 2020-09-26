import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountNewComponent } from './account-new.component';

const routes: Routes = [{ path: '', component: AccountNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountNewRoutingModule { }
