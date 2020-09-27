import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateBillingStatementRoutingModule } from './generate-billing-statement-routing.module';
import { GenerateBillingStatementComponent } from './generate-billing-statement.component';

import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';
import { FieldTextViewModule } from '../../../../shared/form/field-text-view/field-text-view.module';

@NgModule({
    declarations: [GenerateBillingStatementComponent],
    imports: [
        CommonModule,
        GenerateBillingStatementRoutingModule,

        FieldSelectModule,
        FieldTextViewModule
    ],
    exports: [
        GenerateBillingStatementComponent
    ]
})
export class GenerateBillingStatementModule { }
