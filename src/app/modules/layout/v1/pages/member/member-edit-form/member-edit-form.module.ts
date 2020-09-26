import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberEditFormRoutingModule } from './member-edit-form-routing.module';
import { MemberEditFormComponent } from './member-edit-form.component';

import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../shared/form/field-select/field-select.module';
import { FieldCheckboxModule } from '../../../shared/form/field-checkbox/field-checkbox.module';

@NgModule({
  declarations: [MemberEditFormComponent],
  imports: [
    CommonModule,
    MemberEditFormRoutingModule,

    FieldTextModule,
    FieldSelectModule,
    FieldCheckboxModule
  ],
  exports: [
      MemberEditFormComponent
  ]
})
export class MemberEditFormModule { }
