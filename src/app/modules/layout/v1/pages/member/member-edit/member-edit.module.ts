import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MemberEditRoutingModule } from './member-edit-routing.module';
import { MemberEditComponent } from './member-edit.component';

// import { CardModule } from '../../../shared/card/card.module';
import { FieldTextModule } from '../../../shared/form/field-text/field-text.module';

@NgModule({
  declarations: [MemberEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MemberEditRoutingModule,

    // CardModule,
    // FieldTextModule
  ]
})
export class MemberEditModule { }
