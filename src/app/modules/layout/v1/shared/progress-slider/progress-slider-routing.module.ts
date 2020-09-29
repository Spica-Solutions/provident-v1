import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressSliderComponent } from './progress-slider.component';

const routes: Routes = [{ path: '', component: ProgressSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressSliderRoutingModule { }
