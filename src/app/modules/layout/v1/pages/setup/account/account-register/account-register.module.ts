import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRegisterRoutingModule } from './account-register-routing.module';
import { AccountRegisterComponent } from './account-register.component';


@NgModule({
  declarations: [AccountRegisterComponent],
  imports: [
    CommonModule,
    AccountRegisterRoutingModule
  ],
  exports: [
      AccountRegisterComponent
  ]
})
export class AccountRegisterModule { }
