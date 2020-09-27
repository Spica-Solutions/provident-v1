import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanySettingsRoutingModule } from './company-settings-routing.module';
import { CompanySettingsComponent } from './company-settings.component';

import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';
import { FieldSelectModule } from '../../../shared/form/field-select/field-select.module';
import { FieldCheckboxModule } from '../../../shared/form/field-checkbox/field-checkbox.module';
@NgModule({
  declarations: [CompanySettingsComponent],
  imports: [
    CommonModule,
    CompanySettingsRoutingModule,

    FieldTextModule,
    FieldSelectModule,
    FieldCheckboxModule
  ],
  exports: [
      CompanySettingsComponent
  ]
})
export class CompanySettingsModule { }
