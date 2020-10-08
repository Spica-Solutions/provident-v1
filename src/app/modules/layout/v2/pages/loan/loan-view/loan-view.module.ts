import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanViewRoutingModule } from './loan-view-routing.module';
import { LoanViewComponent } from './loan-view.component';


@NgModule({
    declarations: [LoanViewComponent],
    imports: [
        CommonModule,
        LoanViewRoutingModule
    ],
    exports: [
        LoanViewComponent
    ]
})
export class LoanViewModule { }
