import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberViewRoutingModule } from './member-view-routing.module';
import { MemberViewComponent } from './member-view.component';


@NgModule({
    declarations: [MemberViewComponent],
    imports: [
        CommonModule,
        MemberViewRoutingModule
    ],
    exports: [
        MemberViewComponent
    ]
})
export class MemberViewModule { }
