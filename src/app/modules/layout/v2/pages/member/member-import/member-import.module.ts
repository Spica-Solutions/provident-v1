import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberImportRoutingModule } from './member-import-routing.module';
import { MemberImportComponent } from './member-import.component';


@NgModule({
    declarations: [MemberImportComponent],
    imports: [
        CommonModule,
        MemberImportRoutingModule
    ],
    exports: [
        MemberImportComponent
    ]
})
export class MemberImportModule { }
