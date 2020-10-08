import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2TopbarRoutingModule } from './v2-topbar-routing.module';
import { V2TopbarComponent } from './v2-topbar.component';


@NgModule({
    declarations: [V2TopbarComponent],
    imports: [
        CommonModule,
        V2TopbarRoutingModule
    ],
    exports: [
        V2TopbarComponent
    ]
})
export class V2TopbarModule { }
