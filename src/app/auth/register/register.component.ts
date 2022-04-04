import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  public registerForm = this.formBuilder.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    isAdmin: [false]
  })

  constructor(private formBuilder: FormBuilder) {

  }


}
