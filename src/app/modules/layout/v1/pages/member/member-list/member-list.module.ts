import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberListRoutingModule } from './member-list-routing.module';
import { MemberListComponent } from './member-list.component';

import { ProgressSliderModule } from '../../../shared/progress-slider/progress-slider.module';

@NgModule({
    declarations: [MemberListComponent],
    imports: [
        CommonModule,
        MemberListRoutingModule,

        ProgressSliderModule
    ]
})
export class MemberListModule { }
