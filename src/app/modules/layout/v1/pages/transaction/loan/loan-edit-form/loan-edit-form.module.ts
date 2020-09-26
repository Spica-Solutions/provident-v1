import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanEditFormRoutingModule } from './loan-edit-form-routing.module';
import { LoanEditFormComponent } from './loan-edit-form.component';

import { FieldTextModule } from '../../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';
import { FieldTextViewModule } from '../../../../shared/form/field-text-view/field-text-view.module';

@NgModule({
    declarations: [LoanEditFormComponent],
    imports: [
        CommonModule,
        LoanEditFormRoutingModule,

        FieldTextModule,
        FieldSelectModule,
        FieldTextViewModule
    ],
    exports: [
        LoanEditFormComponent
    ]
})
export class LoanEditFormModule { }
