import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollSampleRoutingModule } from './virtual-scroll-sample-routing.module';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [VirtualScrollSampleComponent],
  entryComponents: [VirtualScrollSampleComponent],
  imports: [
    CommonModule,
    VirtualScrollSampleRoutingModule
  ]
})
export class VirtualScrollSampleModule { }
