import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeSampleComponent } from './tree-sample.component';

const routes: Routes = [
  { path: '', component: TreeSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeSampleRoutingModule { }
