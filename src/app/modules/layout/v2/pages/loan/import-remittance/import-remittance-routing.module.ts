import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportRemittanceComponent } from './import-remittance.component';

const routes: Routes = [{ path: '', component: ImportRemittanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRemittanceRoutingModule { }
