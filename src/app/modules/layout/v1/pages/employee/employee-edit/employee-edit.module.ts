import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeEditRoutingModule } from './employee-edit-routing.module';
import { EmployeeEditComponent } from './employee-edit.component';

// import { CardModule } from '../../../shared/card/card.module';
import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';

@NgModule({
  declarations: [EmployeeEditComponent],
  imports: [
    CommonModule,
    EmployeeEditRoutingModule,

    // CardModule,
    FieldTextModule
  ]
})
export class EmployeeEditModule { }
