import { Component, OnInit } from '@angular/core';
import { Platform, getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-platform-sample',
  templateUrl: './platform-sample.component.html',
  styleUrls: ['./platform-sample.component.scss']
})
export class PlatformSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public get hasDateInput() {
    return false;
  }

}
