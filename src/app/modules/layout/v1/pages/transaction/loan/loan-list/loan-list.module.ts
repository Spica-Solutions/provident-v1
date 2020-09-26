import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanListRoutingModule } from './loan-list-routing.module';
import { LoanListComponent } from './loan-list.component';


@NgModule({
    declarations: [LoanListComponent],
    imports: [
        CommonModule,
        LoanListRoutingModule
    ],
    exports: [
        LoanListComponent
    ]
})
export class LoanListModule { }
