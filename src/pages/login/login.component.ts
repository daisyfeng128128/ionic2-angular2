import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginServise } from './../../servise/login/login.servise';
import { MasterServise } from './../../core/master.servise';
import { RegisterPage } from './../register/register.component';
import { TabsPage } from './../tabs/tabs';



/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userinfo: any;
  constructor(
    public loginservise: LoginServise,
    public navCtrl: NavController,
    public storage: Storage,
    public master: MasterServise
  ) {
  }

  checkLogIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.master.showToast("请输入账号");
    } else if (password.value.length == 0) {
      this.master.showToast("请输入密码");
    } else {
      this.userinfo = {
        phoneNum: username.value,
        password: password.value
      }
      this.login(this.userinfo);
    }
  }

  GoToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  // 请求登录接口
  public login(data: any) {
    this.loginservise.login(data)
      .then(success => {
        if (success.success) {
          this.storage.set("userinfo", success.returnObj);
          this.navCtrl.setRoot(TabsPage);
        } else {
          this.master.showToast(success.msg);
        }
      }).catch(err => {
        this.master.showToast(err.msg);
      });
  }


}
