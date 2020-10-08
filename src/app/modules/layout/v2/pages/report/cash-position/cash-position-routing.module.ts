import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashPositionComponent } from './cash-position.component';

const routes: Routes = [{ path: '', component: CashPositionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashPositionRoutingModule { }
