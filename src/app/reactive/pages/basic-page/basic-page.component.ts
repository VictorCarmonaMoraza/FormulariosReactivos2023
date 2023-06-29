import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Creamos una constante que seran los valores que tendra nuestro formulario
const propiedadesInicialesFormulario ={
  name: 'Victor',
  price: 0,
  insStorage: 0
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit{

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    //this.myForm.reset(propiedadesInicialesFormulario);
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    insStorage: [0, [Validators.required, Validators.min(0)]]
  })

  onSave(): void {

    if (this.myForm.invalid) {
      //Marca que todos los campos fueron tocados
      this.myForm.markAllAsTouched()
      return;
    }
    //console.log(this.myForm.value);
    //Restablecer el formulario parte 1
    this.myForm.reset();

    //Restablecer formulario parte 2
    //this.myForm.reset({ price: 10, insStorage: 0 });
  }

}
