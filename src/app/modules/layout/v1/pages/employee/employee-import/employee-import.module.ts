import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeImportRoutingModule } from './employee-import-routing.module';
import { EmployeeImportComponent } from './employee-import.component';

import { FieldFileModule } from '../../../shared/form/field-file/field-file.module';

@NgModule({
  declarations: [EmployeeImportComponent],
  imports: [
    CommonModule,
    EmployeeImportRoutingModule,

    FieldFileModule
  ],
  exports: [
      EmployeeImportComponent
  ]
})
export class EmployeeImportModule { }
