import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountFormRoutingModule } from './account-form-routing.module';
import { AccountFormComponent } from './account-form.component';

import { FieldTextModule } from '../../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';

@NgModule({
    declarations: [AccountFormComponent],
    imports: [
        CommonModule,
        AccountFormRoutingModule,
        ReactiveFormsModule,

        FieldTextModule,
        FieldSelectModule
    ],
    exports: [
        AccountFormComponent
    ]
})
export class AccountFormModule { }
