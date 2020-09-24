import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRowRoutingModule } from './item-list-row-routing.module';
import { ItemListRowComponent } from './item-list-row.component';


@NgModule({
  declarations: [ItemListRowComponent],
  imports: [
    CommonModule,
    ItemListRowRoutingModule
  ],
  exports: [
      ItemListRowComponent
  ]
})
export class ItemListRowModule { }
