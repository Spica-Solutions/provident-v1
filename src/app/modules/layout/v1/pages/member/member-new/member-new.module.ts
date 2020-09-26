import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberNewRoutingModule } from './member-new-routing.module';
import { MemberNewComponent } from './member-new.component';

import { MemberEditFormModule } from '../member-edit-form/member-edit-form.module';

@NgModule({
    declarations: [MemberNewComponent],
    imports: [
        CommonModule,
        MemberNewRoutingModule,

        MemberEditFormModule
    ]
})
export class MemberNewModule { }
