import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtabRoutingModule } from './subtab-routing.module';
import { SubtabComponent } from './subtab.component';


@NgModule({
  declarations: [SubtabComponent],
  imports: [
    CommonModule,
    SubtabRoutingModule
  ],
  exports: [
      SubtabComponent
  ]
})
export class SubtabModule { }
