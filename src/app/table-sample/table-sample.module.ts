import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableSampleRoutingModule } from './table-sample-routing.module';
import { TableSampleComponent } from './table-sample.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [TableSampleComponent],
  entryComponents: [TableSampleComponent],
  imports: [
    CommonModule,
    TableSampleRoutingModule,
    CdkTableModule
  ]
})
export class TableSampleModule { }
