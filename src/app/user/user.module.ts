import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, LogoutComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent, LogoutComponent, SignupComponent
  ]
})
export class UserModule { }
