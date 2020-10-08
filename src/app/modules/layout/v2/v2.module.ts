import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2RoutingModule } from './v2-routing.module';
import { V2Component } from './v2.component';

import { V2TopbarModule } from './shared/v2-topbar/v2-topbar.module';
import { V2NavbarModule } from './shared/v2-navbar/v2-navbar.module';

@NgModule({
    declarations: [V2Component],
    imports: [
        CommonModule,
        V2RoutingModule,

        V2TopbarModule,
        V2NavbarModule
    ]
})
export class V2Module { }
