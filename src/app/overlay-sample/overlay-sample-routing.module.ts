import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlaySampleComponent } from './overlay-sample.component';

const routes: Routes = [
  { path: '', component: OverlaySampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlaySampleRoutingModule { }
