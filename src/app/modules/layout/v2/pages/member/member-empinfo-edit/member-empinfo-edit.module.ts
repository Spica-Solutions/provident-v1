import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberEmpinfoEditRoutingModule } from './member-empinfo-edit-routing.module';
import { MemberEmpinfoEditComponent } from './member-empinfo-edit.component';


@NgModule({
    declarations: [MemberEmpinfoEditComponent],
    imports: [
        CommonModule,
        MemberEmpinfoEditRoutingModule
    ],
    exports: [
        MemberEmpinfoEditComponent
    ]
})
export class MemberEmpinfoEditModule { }
