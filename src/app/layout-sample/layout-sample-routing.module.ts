import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSampleComponent } from './layout-sample.component';

const routes: Routes = [
  { path: '', component: LayoutSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutSampleRoutingModule { }
