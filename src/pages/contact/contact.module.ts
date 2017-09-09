import { ContactPage } from './contact.component';
import { ContactServise } from './../../servise/contact/contact.servise';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';



@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  providers:[
   ContactServise
  ]
})
export class ContactModule {}
