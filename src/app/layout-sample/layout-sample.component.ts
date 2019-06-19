import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-sample',
  templateUrl: './layout-sample.component.html',
  styleUrls: ['./layout-sample.component.scss']
})
export class LayoutSampleComponent implements OnInit {

  public portrait$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

}
