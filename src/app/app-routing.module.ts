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

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'platform', component: PlatformSampleComponent, data: { label: 'Platform', icon: 'computer' } },
  { path: 'layout', component: LayoutSampleComponent, data: { label: 'Layout', icon: 'clear_all' } },
  { path: 'tree', component: TreeSampleComponent, data: { label: 'Tree', icon: 'expand_more' } },
  { path: 'table', component: TableSampleComponent, data: { label: 'Table', icon: 'table_chart' } },
  { path: 'overlay', component: OverlaySampleComponent, data: { label: 'Overlay', icon: 'layers' } },
  { path: 'dnd', component: DndSampleComponent, data: { label: 'Drag&Drop', icon: 'mouse' } },
  { path: 'virtualscroll', component: VirtualScrollSampleComponent, data: { label: 'Virtual Scrolling', icon: 'unfold_more' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
