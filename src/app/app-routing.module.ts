import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformSampleComponent } from './platform-sample/platform-sample.component';
import { HomeComponent } from './home/home.component';
import { LayoutSampleComponent } from './layout-sample/layout-sample.component';
import { TreeSampleComponent } from './tree-sample/tree-sample.component';
import { TableSampleComponent } from './table-sample/table-sample.component';
import { OverlaySampleComponent } from './overlay-sample/overlay-sample.component';
import { DndSampleComponent } from './dnd-sample/dnd-sample.component';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample/virtual-scroll-sample.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'platform', component: PlatformSampleComponent },
  { path: 'layout', component: LayoutSampleComponent },
  { path: 'tree', component: TreeSampleComponent },
  { path: 'table', component: TableSampleComponent },
  { path: 'overlay', component: OverlaySampleComponent },
  { path: 'dnd', component: DndSampleComponent },
  { path: 'virtualscroll', component: VirtualScrollSampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
