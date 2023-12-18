import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  form: FormGroup;

  constructor(private  formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      age: [ Validators.required],
      type: [ Validators.required],
      vaccinated: [Validators.required],
      color: [Validators.required],
    });


  
    // console.log(this.form.controls['name'].dirty);
    // console.log( this.form.controls['age'].touched);
    // console.log( this.form.controls['type'].status === 'PENDING');
    // console.log( this.form.controls['vaccinated'].pristine);
    // console.log( this.form.controls['color'].dirty);

  }

  save() {
    if (this.form.valid) {
      
      alert('Correcto');
    } else {
     
      alert('Formulario inválido, completa los campos correctamente.');
    }
  }


  get NameControls(){
   return this.form.controls['name'];
  }

  get AgeControls(){
    return this.form.controls['age'];
   }

   get TypeControls(){
    return this.form.controls['type'];
   }
   get VaccinatedControls(){
    return this.form.controls['vaccinated'];
   }
   get ColorControls(){
    return this.form.controls['color'];
   }
  


}
