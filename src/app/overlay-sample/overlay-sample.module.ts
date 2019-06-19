import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlaySampleRoutingModule } from './overlay-sample-routing.module';
import { OverlaySampleComponent } from './overlay-sample.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [OverlaySampleComponent],
  entryComponents: [OverlaySampleComponent],
  imports: [
    CommonModule,
    OverlaySampleRoutingModule,
    ReactiveFormsModule
  ]
})
export class OverlaySampleModule { }
