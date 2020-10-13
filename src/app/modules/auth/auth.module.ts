import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignUpComponent, SignInComponent, ActivateAccountComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
