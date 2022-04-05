import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.scss']
})
export class FormSwitchComponent implements OnInit {
public isRegisterMode = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleAuthMode(){
    this.isRegisterMode = !this.isRegisterMode
  }
}
