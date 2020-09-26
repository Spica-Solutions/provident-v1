import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberEditBeneficiariesRoutingModule } from './member-edit-beneficiaries-routing.module';
import { MemberEditBeneficiariesComponent } from './member-edit-beneficiaries.component';

import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../shared/form/field-select/field-select.module';

@NgModule({
  declarations: [MemberEditBeneficiariesComponent],
  imports: [
    CommonModule,
    MemberEditBeneficiariesRoutingModule,

    FieldTextModule,
    FieldSelectModule
  ],
  exports: [
      MemberEditBeneficiariesComponent
  ]
})
export class MemberEditBeneficiariesModule { }
