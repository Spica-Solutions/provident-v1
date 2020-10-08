import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';

import { TopbarModule } from '../../layout/v1/shared/topbar/topbar.module';
import { NavbarModule } from '../../layout/v1/shared/navbar/navbar.module';

@NgModule({
    declarations: [MemberComponent],
    imports: [
        CommonModule,
        MemberRoutingModule,

        TopbarModule,
        NavbarModule
    ]
})
export class MemberModule { }
