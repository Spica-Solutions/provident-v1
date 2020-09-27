import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';

import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../shared/form/field-select/field-select.module';
import { FieldCheckboxModule } from '../../../shared/form/field-checkbox/field-checkbox.module';

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,

    FieldTextModule,
    FieldSelectModule,
    FieldCheckboxModule
  ],
  exports: [
      DepartmentsComponent
  ]
})
export class DepartmentsModule { }
