import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register.component';

import { RegisterServise } from './../../servise/register/register.servise';
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  providers:[
    RegisterServise
  ]
})
export class RegisterModule {}
