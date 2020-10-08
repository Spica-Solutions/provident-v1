import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementActivitiesComponent } from './statement-activities.component';

const routes: Routes = [{ path: '', component: StatementActivitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementActivitiesRoutingModule { }
