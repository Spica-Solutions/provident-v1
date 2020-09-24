import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeEditFormRoutingModule } from './employee-edit-form-routing.module';
import { EmployeeEditFormComponent } from './employee-edit-form.component';

import { FieldTextModule } from '../../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../../shared/form/field-select/field-select.module';
import { FieldCheckboxModule } from '../../../../shared/form/field-checkbox/field-checkbox.module';

@NgModule({
  declarations: [EmployeeEditFormComponent],
  imports: [
    CommonModule,
    EmployeeEditFormRoutingModule,

    FieldTextModule,
    FieldSelectModule,
    FieldCheckboxModule
  ],
  exports: [
      EmployeeEditFormComponent
  ]
})
export class EmployeeEditFormModule { }
