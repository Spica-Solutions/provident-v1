import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarRoutingModule } from './topbar-routing.module';
import { TopbarComponent } from './topbar.component';


@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    TopbarRoutingModule
  ],
  exports: [
      TopbarComponent
  ]
})
export class TopbarModule { }
