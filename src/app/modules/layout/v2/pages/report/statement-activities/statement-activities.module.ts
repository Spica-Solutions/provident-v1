import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementActivitiesRoutingModule } from './statement-activities-routing.module';
import { StatementActivitiesComponent } from './statement-activities.component';


@NgModule({
  declarations: [StatementActivitiesComponent],
  imports: [
    CommonModule,
    StatementActivitiesRoutingModule
  ]
})
export class StatementActivitiesModule { }
