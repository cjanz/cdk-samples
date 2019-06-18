import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PlatformModule } from '@angular/cdk/platform';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformSampleComponent } from './platform-sample/platform-sample.component';
import { HomeComponent } from './home/home.component';
import { TableSampleComponent } from './table-sample/table-sample.component';
import { TreeSampleComponent } from './tree-sample/tree-sample.component';
import { OverlaySampleComponent } from './overlay-sample/overlay-sample.component';
import { LayoutSampleComponent } from './layout-sample/layout-sample.component';
import { DndSampleComponent } from './dnd-sample/dnd-sample.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample/virtual-scroll-sample.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    PlatformSampleComponent,
    HomeComponent,
    TableSampleComponent,
    TreeSampleComponent,
    OverlaySampleComponent,
    LayoutSampleComponent,
    DndSampleComponent,
    VirtualScrollSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PlatformModule,
    LayoutModule,
    OverlayModule,
    CdkTreeModule,
    CdkTableModule,
    A11yModule,
    ReactiveFormsModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [],
  entryComponents: [
    HomeComponent,
    PlatformSampleComponent,
    LayoutSampleComponent,
    TreeSampleComponent,
    TableSampleComponent,
    OverlaySampleComponent,
    DndSampleComponent,
    VirtualScrollSampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
