import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListRoutingModule } from './account-list-routing.module';
import { AccountListComponent } from './account-list.component';


@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    AccountListRoutingModule
  ],
  exports: [
      AccountListComponent
  ]
})
export class AccountListModule { }
