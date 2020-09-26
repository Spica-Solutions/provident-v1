import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberContribsRoutingModule } from './member-contribs-routing.module';
import { MemberContribsComponent } from './member-contribs.component';


@NgModule({
    declarations: [MemberContribsComponent],
    imports: [
        CommonModule,
        MemberContribsRoutingModule
    ],
    exports: [
        MemberContribsComponent
    ]
})
export class MemberContribsModule { }
