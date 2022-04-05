import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSwitchComponent } from './auth/form-switch/form-switch.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, FormSwitchComponent, HeaderComponent, DashboardComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
