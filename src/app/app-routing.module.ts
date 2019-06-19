import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'platform',
    data: { label: 'Platform', icon: 'computer' },
    loadChildren: () => import('./platform-sample/platform-sample.module').then(m => m.PlatformSampleModule)
  },
  {
    path: 'layout',
    data: { label: 'Layout', icon: 'clear_all' },
    loadChildren: () => import('./layout-sample/layout-sample.module').then(m => m.LayoutSampleModule)
  },
  {
    path: 'tree',
    data: { label: 'Tree', icon: 'expand_more' },
    loadChildren: () => import('./tree-sample/tree-sample.module').then(m => m.TreeSampleModule)
  },
  {
    path: 'table',
    data: { label: 'Table', icon: 'table_chart' },
    loadChildren: () => import('./table-sample/table-sample.module').then(m => m.TableSampleModule)
  },
  {
    path: 'overlay',
    data: { label: 'Overlay', icon: 'layers' },
    loadChildren: () => import('./overlay-sample/overlay-sample.module').then(m => m.OverlaySampleModule)
  },
  {
    path: 'dnd',
    data: { label: 'Drag&Drop', icon: 'mouse' },
    loadChildren: () => import('./dnd-sample/dnd-sample.module').then(m => m.DndSampleModule)
  },
  {
    path: 'virtualscroll',
    data: { label: 'Virtual Scrolling', icon: 'unfold_more' },
    loadChildren: () => import('./virtual-scroll-sample/virtual-scroll-sample.module').then(m => m.VirtualScrollSampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
