import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleViewRoutingModule } from './role-view-routing.module';
import { RoleViewComponent } from './role-view.component';


@NgModule({
    declarations: [RoleViewComponent],
    imports: [
        CommonModule,
        RoleViewRoutingModule
    ],
    exports: [
        RoleViewComponent
    ]
})
export class RoleViewModule { }
