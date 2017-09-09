import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MePage } from '../me/me.component';
import { ContactPage } from '../contact/contact.component';
import { MessagePage } from '../message/message.component';
import { SearchFriendPage } from './search-friend/search-friend.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  messageTab = MessagePage;
  meTab =  MePage;
  contactTab = ContactPage;

  constructor(
    public appCtrl: App
  ) {
    

  }
  goSearch() {
    this.appCtrl.getRootNav().push(SearchFriendPage);
  }

}
