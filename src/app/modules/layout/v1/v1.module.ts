import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V1RoutingModule } from './v1-routing.module';
import { V1Component } from './v1.component';

import { TopbarModule } from './shared/topbar/topbar.module';
import { NavbarModule } from './shared/navbar/navbar.module';

@NgModule({
    declarations: [V1Component],
    imports: [
        CommonModule,
        V1RoutingModule,

        TopbarModule,
        NavbarModule
    ]
})
export class V1Module { }
