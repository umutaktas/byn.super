import { LoginBackgroundVideoPage } from './login-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginBackgroundVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBackgroundVideoPage),
  ],
  exports: [
    LoginBackgroundVideoPage
  ]
})

export class LoginBackgroundVideoPageModule { }
