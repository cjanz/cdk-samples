import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample.component';

const routes: Routes = [
  { path: '', component: VirtualScrollSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualScrollSampleRoutingModule { }
