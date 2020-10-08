import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberEmpinfoRoutingModule } from './member-empinfo-routing.module';
import { MemberEmpinfoComponent } from './member-empinfo.component';


@NgModule({
    declarations: [MemberEmpinfoComponent],
    imports: [
        CommonModule,
        MemberEmpinfoRoutingModule
    ],
    exports: [
        MemberEmpinfoComponent
    ]
})
export class MemberEmpinfoModule { }
