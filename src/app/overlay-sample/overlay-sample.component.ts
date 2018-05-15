import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-overlay-sample',
  templateUrl: './overlay-sample.component.html',
  styleUrls: ['./overlay-sample.component.scss']
})
export class OverlaySampleComponent implements OnInit {

  public isOpen = false;

  public address = '';

  public addressForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.addressForm = fb.group({
      street: '',
      number: ''
    });
  }

  public close() {
    this.isOpen = false;
    this.address = this.addressForm.value['street'] + ' ' + this.addressForm.value['number'];
  }

  ngOnInit() {
  }

}
