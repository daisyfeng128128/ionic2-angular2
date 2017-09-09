import { MasterServise } from './../../core/master.servise';
import { RegisterServise } from './../../servise/register/register.servise';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public registerservise: RegisterServise,
    public master: MasterServise
  ) {


  }

  checkRegister(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.master.showToast("请输入账号");
    } else if (password.value.length == 0) {
      this.master.showToast("请输入密码");
    } else {
      let userinfo = {
        phoneNum: username.value,
        password: password.value,
      }
      this.register(userinfo);
    }
  }

  register(data: any) {
    this.registerservise.register(data)
      .then(success => {
        if (success.success) {
          this.master.showToast("注册成功");
          this.navCtrl.pop();
        } else {
          this.master.showToast(success.msg);
        }
      }).catch(err => {
        this.master.showToast(err.msg);
      });
  }


}
