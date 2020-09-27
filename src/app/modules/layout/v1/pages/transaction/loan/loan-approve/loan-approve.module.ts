import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApproveRoutingModule } from './loan-approve-routing.module';
import { LoanApproveComponent } from './loan-approve.component';

import { FieldTextModule } from '../../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';

@NgModule({
    declarations: [LoanApproveComponent],
    imports: [
        CommonModule,
        LoanApproveRoutingModule,

        FieldTextModule,
        FieldSelectModule
    ],
    exports: [
        LoanApproveComponent
    ]
})
export class LoanApproveModule { }
