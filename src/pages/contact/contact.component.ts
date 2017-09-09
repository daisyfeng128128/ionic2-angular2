import { ContactServise } from './../../servise/contact/contact.servise';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public contactCtrl: ContactServise,
  ) {
    this.contactCtrl.contact().then((success) => {
      console.log(success)
    });

  }

}
