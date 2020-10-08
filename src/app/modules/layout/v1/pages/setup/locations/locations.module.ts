import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';

import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';
import { FieldCheckboxModule } from '../../../shared/form/field-checkbox/field-checkbox.module';

@NgModule({
    declarations: [LocationsComponent],
    imports: [
        CommonModule,
        LocationsRoutingModule,
        ReactiveFormsModule,

        FieldTextModule,
        FieldCheckboxModule
    ],
    exports: [
        LocationsComponent
    ]
})
export class LocationsModule { }
