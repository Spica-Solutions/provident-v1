import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberContribsRoutingModule } from './member-contribs-routing.module';
import { MemberContribsComponent } from './member-contribs.component';

import { FieldTextViewModule } from '../../../shared/form/field-text-view/field-text-view.module';

@NgModule({
    declarations: [MemberContribsComponent],
    imports: [
        CommonModule,
        MemberContribsRoutingModule,

        FieldTextViewModule
    ],
    exports: [
        MemberContribsComponent
    ]
})
export class MemberContribsModule { }
