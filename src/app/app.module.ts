import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginModule } from './../pages/login/login.module';
import { RegisterModule } from './../pages/register/register.module';
import { ContactModule } from './../pages/contact/contact.module';
import { MessageModule } from './../pages/message/message.module';
import { MeModule } from './../pages/me/me.module';


import { MasterServise } from './../core/master.servise';
import { HttpServise } from './../core/http.servise';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule, 
    LoginModule,
    RegisterModule,
    HttpModule,
    ContactModule,
    MessageModule,
    MeModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MasterServise,
    HttpServise,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
