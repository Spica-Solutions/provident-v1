import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListRowComponent } from './item-list-row.component';

const routes: Routes = [{ path: '', component: ItemListRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRowRoutingModule { }
