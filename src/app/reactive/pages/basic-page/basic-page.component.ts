import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  constructor(private fb: FormBuilder) {

  }

  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    insStorage: [0]
  })

  onSave(): void {
    console.log(this.myForm.value);
  }

}
