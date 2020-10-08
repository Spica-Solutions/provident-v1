import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2NavbarComponent } from './v2-navbar.component';

const routes: Routes = [{ path: '', component: V2NavbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2NavbarRoutingModule { }
