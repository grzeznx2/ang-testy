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
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { DashboardAuthorComponent } from './dashboard/dashboard-author/dashboard-author.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, FormSwitchComponent, HeaderComponent, DashboardComponent, RecipeFormComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailsComponent, DashboardAuthorComponent, DashboardUserComponent, ModalComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
