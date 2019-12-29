import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//Dependency Imports
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
//External Library Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {path:"signup", component:SignupComponent}
]

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()],
  exports: [RouterModule],
})
export class UserModule { }
  