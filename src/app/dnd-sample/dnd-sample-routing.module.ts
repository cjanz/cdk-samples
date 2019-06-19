import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DndSampleComponent } from './dnd-sample.component';

const routes: Routes = [
  { path: '', component: DndSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndSampleRoutingModule { }
