import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { FieldTextModule } from '../../shared/form/field-text/field-text.module';
import { FieldFileModule } from '../../shared/form/field-file/field-file.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,

    PageHeaderModule,
    FieldTextModule,
    FieldFileModule
  ],
  exports: [
      UploadComponent
  ]
})
export class UploadModule { }
