import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberNewRoutingModule } from './member-new-routing.module';
import { MemberNewComponent } from './member-new.component';


@NgModule({
    declarations: [MemberNewComponent],
    imports: [
        CommonModule,
        MemberNewRoutingModule
    ],
    exports: [
        MemberNewComponent
    ]
})
export class MemberNewModule { }
