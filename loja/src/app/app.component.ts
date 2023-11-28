import { Component } from '@angular/core';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'loja'; 
  // registrationForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.registrationForm = this.fb.group({
  //     nome: ['', [Validators.required, Validators.maxLength(50)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
  //     telefone: ['', [Validators.required, Validators.pattern(/^[0-9]{2}-[0-9]{4,5}-[0-9]{4}$/)]],
  //     password: ['', [Validators.required, Validators.pattern(/^.{6,10}$/)]],
  //     confirmar: ['', [Validators.required, Validators.pattern(/^.{6,10}$/)]],
  //     remember: [false]
  //   });
  // }

  // onSubmit() {
  //   if (this.registrationForm.valid) {
  //     // Form is valid, perform form submission or other actions here
  //     console.log(this.registrationForm.value);
  //   }
  // }

}