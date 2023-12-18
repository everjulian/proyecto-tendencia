import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordConfirm: [null, [Validators.required]]
    });
  }
  
  forms = this.formBuilder.group({
    username: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    passwordConfirm: [null, [Validators.required]]
  });

  save() {
    if (this.form.valid) {
      
      alert('Correcto');
    } else {
     
      alert('Formulario inválido, completa los campos correctamente.');
    }
  }
}
