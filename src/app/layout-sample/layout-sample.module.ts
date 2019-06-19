import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutSampleRoutingModule } from './layout-sample-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutSampleComponent } from './layout-sample.component';

@NgModule({
  declarations: [LayoutSampleComponent],
  entryComponents: [LayoutSampleComponent],
  imports: [
    CommonModule,
    LayoutSampleRoutingModule
  ]
})
export class LayoutSampleModule { }
