import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRemittanceRoutingModule } from './import-remittance-routing.module';
import { ImportRemittanceComponent } from './import-remittance.component';


@NgModule({
  declarations: [ImportRemittanceComponent],
  imports: [
    CommonModule,
    ImportRemittanceRoutingModule
  ]
})
export class ImportRemittanceModule { }
