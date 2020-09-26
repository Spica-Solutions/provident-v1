import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountEditRoutingModule } from './account-edit-routing.module';
import { AccountEditComponent } from './account-edit.component';

import { AccountFormModule } from '../account-form/account-form.module';

@NgModule({
    declarations: [AccountEditComponent],
    imports: [
        CommonModule,
        AccountEditRoutingModule,

        AccountFormModule
    ],
    exports: [
        AccountEditComponent
    ]
})
export class AccountEditModule { }
