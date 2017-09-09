import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
  ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    // this.storage.remove('userinfo');
    this.isLogin();
  }


  //是否登录
  public isLogin() {
    this.storage.get('userinfo').then((result) => {
      if (result) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    })
  }
}
