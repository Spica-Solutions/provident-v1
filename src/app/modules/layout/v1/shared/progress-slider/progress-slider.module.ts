import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSliderRoutingModule } from './progress-slider-routing.module';
import { ProgressSliderComponent } from './progress-slider.component';

@NgModule({
    declarations: [ProgressSliderComponent],
    imports: [
        CommonModule,
        ProgressSliderRoutingModule
    ],
    exports: [
        ProgressSliderComponent
    ]
})
export class ProgressSliderModule { }
