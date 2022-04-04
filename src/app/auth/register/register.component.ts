import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {

  }

 ngOnInit(): void {
   this.registerForm = this._createForm()
 }

 private _createForm() {
  return this.formBuilder.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    isAdmin: [false]
  })
 }

}
