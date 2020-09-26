import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountNewRoutingModule } from './account-new-routing.module';
import { AccountNewComponent } from './account-new.component';

import { AccountFormModule } from '../account-form/account-form.module';

@NgModule({
  declarations: [AccountNewComponent],
  imports: [
    CommonModule,
    AccountNewRoutingModule,

    AccountFormModule
  ],
  exports: [
      AccountNewComponent
  ]
})
export class AccountNewModule { }
