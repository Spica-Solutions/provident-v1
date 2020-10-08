import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2NavbarRoutingModule } from './v2-navbar-routing.module';
import { V2NavbarComponent } from './v2-navbar.component';


@NgModule({
    declarations: [V2NavbarComponent],
    imports: [
        CommonModule,
        V2NavbarRoutingModule
    ],
    exports: [
        V2NavbarComponent
    ]
})
export class V2NavbarModule { }
