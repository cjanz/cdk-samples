import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlatformModule } from '@angular/cdk/platform';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformSampleComponent } from './platform-sample/platform-sample.component';
import { HomeComponent } from './home/home.component';
import { TableSampleComponent } from './table-sample/table-sample.component';
import { TreeSampleComponent } from './tree-sample/tree-sample.component';
import { OverlaySampleComponent } from './overlay-sample/overlay-sample.component';
import { LayoutSampleComponent } from './layout-sample/layout-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformSampleComponent,
    HomeComponent,
    TableSampleComponent,
    TreeSampleComponent,
    OverlaySampleComponent,
    LayoutSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformModule,
    LayoutModule,
    CdkTreeModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [
    HomeComponent,
    PlatformSampleComponent,
    LayoutSampleComponent,
    TreeSampleComponent,
    TableSampleComponent,
    OverlaySampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
