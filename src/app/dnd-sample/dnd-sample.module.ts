import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndSampleRoutingModule } from './dnd-sample-routing.module';
import { DndSampleComponent } from './dnd-sample.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DndSampleComponent],
  entryComponents: [DndSampleComponent],
  imports: [
    CommonModule,
    DndSampleRoutingModule,
    DragDropModule
  ]
})
export class DndSampleModule { }
