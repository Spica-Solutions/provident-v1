import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRemittanceRoutingModule } from './import-remittance-routing.module';
import { ImportRemittanceComponent } from './import-remittance.component';

import { FieldFileModule } from '../../../../shared/form/field-file/field-file.module';
import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';

@NgModule({
    declarations: [ImportRemittanceComponent],
    imports: [
        CommonModule,
        ImportRemittanceRoutingModule,

        FieldFileModule,
        FieldSelectModule
    ],
    exports: [
        ImportRemittanceComponent
    ]
})
export class ImportRemittanceModule { }
