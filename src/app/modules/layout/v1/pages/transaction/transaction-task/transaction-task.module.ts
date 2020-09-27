import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionTaskRoutingModule } from './transaction-task-routing.module';
import { TransactionTaskComponent } from './transaction-task.component';


@NgModule({
    declarations: [TransactionTaskComponent],
    imports: [
        CommonModule,
        TransactionTaskRoutingModule
    ],
    exports: [
        TransactionTaskComponent
    ]
})
export class TransactionTaskModule { }
