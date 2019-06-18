import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-overlay-sample',
  templateUrl: './overlay-sample.component.html',
  styleUrls: ['./overlay-sample.component.scss']
})
export class OverlaySampleComponent {

  public isOpen = false;

  public form: FormGroup;

  public addressForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      address: ''
    });

    this.addressForm = fb.group({
      street: '',
      number: ''
    });
  }

  public close() {
    this.isOpen = false;

    const addressData = this.addressForm.value;
    this.form.patchValue({ address: addressData.street + ' ' + addressData.number });
  }

}
