import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { FieldTextModule } from '../../shared/form/field-text/field-text.module';
import { ItemListModule } from '../../shared/item-list/item-list.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,

    FieldTextModule,
    ItemListModule
  ]
})
export class ListModule { }
