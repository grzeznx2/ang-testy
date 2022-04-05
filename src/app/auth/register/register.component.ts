import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

 ngOnInit(): void {
   this.registerForm = this._createForm()
   this.authService.user$.subscribe(console.log)
 }

 onSubmit(){
  const {isAdmin, ...rest} = this.registerForm.value
  this.authService.register({...rest, roles: isAdmin? ['USER', 'AUTHOR']: ['USER']}).subscribe()
 }

 private _createForm() {
  return this.formBuilder.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    isAdmin: [false]
  })
 }

}
