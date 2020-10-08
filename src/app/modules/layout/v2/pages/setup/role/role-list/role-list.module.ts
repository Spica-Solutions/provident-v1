import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleListRoutingModule } from './role-list-routing.module';
import { RoleListComponent } from './role-list.component';


@NgModule({
    declarations: [RoleListComponent],
    imports: [
        CommonModule,
        RoleListRoutingModule
    ],
    exports: [
        RoleListComponent
    ]
})
export class RoleListModule { }
