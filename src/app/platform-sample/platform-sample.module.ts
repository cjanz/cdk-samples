import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformSampleRoutingModule } from './platform-sample-routing.module';
import { PlatformSampleComponent } from './platform-sample.component';
import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
  declarations: [PlatformSampleComponent],
  entryComponents: [PlatformSampleComponent],
  imports: [
    CommonModule,
    PlatformSampleRoutingModule,
    PlatformModule
  ]
})
export class PlatformSampleModule { }
