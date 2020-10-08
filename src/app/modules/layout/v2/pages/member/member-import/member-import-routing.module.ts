import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberImportComponent } from './member-import.component';

const routes: Routes = [{ path: '', component: MemberImportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberImportRoutingModule { }
