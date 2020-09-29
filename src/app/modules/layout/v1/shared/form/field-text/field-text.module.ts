import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldTextRoutingModule } from './field-text-routing.module';
import { FieldTextComponent } from './field-text.component';


@NgModule({
    declarations: [FieldTextComponent],
    imports: [
        CommonModule,
        FieldTextRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        FieldTextComponent
    ]
})
export class FieldTextModule { }
