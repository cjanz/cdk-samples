import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeSampleRoutingModule } from './tree-sample-routing.module';
import { TreeSampleComponent } from './tree-sample.component';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [TreeSampleComponent],
  entryComponents: [TreeSampleComponent],
  imports: [
    CommonModule,
    TreeSampleRoutingModule,
    CdkTreeModule
  ]
})
export class TreeSampleModule { }
