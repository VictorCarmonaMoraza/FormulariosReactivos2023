import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  constructor(private fb: FormBuilder) {

  }

  public myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    insStorage: [0, [Validators.required, Validators.min(0)]]
  })

  onSave(): void {

    if(this.myForm.invalid){
      return;
    }
    console.log(this.myForm.value);
  }

}
