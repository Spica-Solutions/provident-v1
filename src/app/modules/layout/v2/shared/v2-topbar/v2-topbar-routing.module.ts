import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2TopbarComponent } from './v2-topbar.component';

const routes: Routes = [{ path: '', component: V2TopbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2TopbarRoutingModule { }
