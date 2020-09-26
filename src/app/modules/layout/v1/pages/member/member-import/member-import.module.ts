import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberImportRoutingModule } from './member-import-routing.module';
import { MemberImportComponent } from './member-import.component';

import { FieldFileModule } from '../../../shared/form/field-file/field-file.module';

@NgModule({
  declarations: [MemberImportComponent],
  imports: [
    CommonModule,
    MemberImportRoutingModule,

    FieldFileModule
  ],
  exports: [
      MemberImportComponent
  ]
})
export class MemberImportModule { }
