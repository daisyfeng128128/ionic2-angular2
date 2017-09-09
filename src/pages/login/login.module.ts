
import { LoginServise } from './../../servise/login/login.servise';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login.component';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers:[
    LoginServise
  ]
})
export class LoginModule {}
