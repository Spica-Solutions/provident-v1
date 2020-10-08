import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApproveRoutingModule } from './loan-approve-routing.module';
import { LoanApproveComponent } from './loan-approve.component';


@NgModule({
    declarations: [LoanApproveComponent],
    imports: [
        CommonModule,
        LoanApproveRoutingModule
    ],
    exports: [
        LoanApproveComponent
    ]
})
export class LoanApproveModule { }
